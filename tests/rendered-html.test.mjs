import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the TransSky city-driver landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Водитель на городской маршрут — работа в TransSky<\/title>/i);
  assert.match(html, /Город\.<br\/>Смена\.<br\/><em>Домой\.<\/em>/);
  assert.match(html, /В основном — город и ближайшая область/);
  assert.match(html, /Домой после смены/);
  assert.match(html, /city-routes\.png/);
  assert.match(html, /Готовы выйти<br\/>на городской маршрут\?/);
  assert.match(html, /<form[^>]+class="form-card"/);
  assert.doesNotMatch(html, /Магистральные перевозки|Владивосток|средняя вахта/);
});

test("ships responsive city imagery and finished metadata", async () => {
  const [page, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/hero-city.png", import.meta.url)),
    access(new URL("../public/fleet-city.png", import.meta.url)),
    access(new URL("../public/city-routes.png", import.meta.url)),
    access(new URL("../public/og-city.png", import.meta.url)),
  ]);

  assert.match(page, /src="\/hero-city\.png"/);
  assert.match(page, /src="\/fleet-city\.png"/);
  assert.match(page, /src="\/city-routes\.png"/);
  assert.match(css, /@media\(max-width:620px\)/);
  assert.match(css, /\.hero-facts\{height:234px;grid-template-columns:1fr 1fr/);
  assert.match(layout, /Город\. Смена\. Домой\. — TransSky/);
  assert.match(layout, /images:\s*\[\{ url: "\/og-city\.png"/);
  assert.doesNotMatch(page, /hero-truck\.png|fleet-truck\.png|russia-routes\.png/);
});
