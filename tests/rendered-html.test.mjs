import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the 5 ТОНН diagnostic landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Бесплатная диагностика коммерческого транспорта — 5 ТОНН<\/title>/i);
  assert.match(html, /БЕСПЛАТНАЯ/);
  assert.match(html, /ДИАГНОСТИКА/);
  assert.match(html, /КОММЕРЧЕСКОГО/);
  assert.match(html, /ДО 5 ТОНН/);
  assert.match(html, /\+7\(495\)023-84-04/);
  assert.match(html, /diagnostic-truck\.png/);
  assert.match(html, /Что входит в/);
  assert.match(html, /Условия акции/);
  assert.match(html, /Запишитесь сейчас/);
  assert.doesNotMatch(html, /TransSky|8 800 700-45-45/);
});

test("ships responsive imagery and finished metadata", async () => {
  const [page, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  await Promise.all([
    access(new URL("../public/diagnostic-truck.png", import.meta.url)),
    access(new URL("../public/og-5tonn.png", import.meta.url)),
  ]);

  assert.match(page, /src="\/diagnostic-truck\.png"/);
  assert.match(page, /tel:\+74950238404/);
  assert.match(css, /@media \(max-width: 680px\)/);
  assert.match(css, /\.diagnostics-grid \{ grid-template-columns: repeat\(2, 1fr\)/);
  assert.match(layout, /Бесплатная диагностика — 5 ТОНН/);
  assert.match(layout, /images: \[\{ url: "\/og-5tonn\.png"/);
});
