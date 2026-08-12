import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const sourceUrl = process.env.STATIC_SOURCE_URL ?? "http://127.0.0.1:3000/";
const publicUrl = process.env.PUBLIC_SITE_URL ?? "https://alex-minami.github.io/5-tonn-service/";
const outputDir = new URL("../.pages/", import.meta.url);

async function loadPage() {
  let lastError;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(sourceUrl);
      if (response.ok) return response.text();
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw lastError ?? new Error("The production server did not become ready");
}

const renderedHtml = await loadPage();
const staticHtml = renderedHtml
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<(?:link)[^>]+rel=["'](?:modulepreload|preload)["'][^>]*>/gi, (tag) =>
    tag.includes("as=\"font\"") || tag.includes("as='font'") ? tag : "",
  )
  .replace(/(href|src)=["']\//g, '$1="./')
  .replaceAll("http://localhost:3000/", publicUrl)
  .replaceAll("url(/_next/", "url(./_next/");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), outputDir, { recursive: true });
await writeFile(new URL("index.html", outputDir), staticHtml);
await writeFile(new URL("404.html", outputDir), staticHtml);
await writeFile(new URL(".nojekyll", outputDir), "");

console.log("Static GitHub Pages bundle created in .pages");
