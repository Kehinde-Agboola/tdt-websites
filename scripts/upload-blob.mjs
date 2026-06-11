// One-time (re-runnable) uploader: pushes every PDF in public/files to Vercel Blob.
//
// Usage (PowerShell):
//   $env:BLOB_READ_WRITE_TOKEN="vercel_blob_rw_xxx"; npm run upload-blob
//
// Get the token from: Vercel dashboard > your project > Storage > your Blob store > ".env" tab.
// After it finishes, copy the printed NEXT_PUBLIC_BLOB_BASE_URL into your Vercel project
// env vars (and .env.local for testing).

import { readdir, readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { put } from "@vercel/blob";

const FILES_DIR = path.join(process.cwd(), "public", "files");

// Minimal .env loader so `npm run upload-blob` picks up BLOB_READ_WRITE_TOKEN
// without needing it exported in the shell (Node doesn't read .env on its own).
for (const envFile of [".env.local", ".env"]) {
  const p = path.join(process.cwd(), envFile);
  if (!existsSync(p)) continue;
  for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = val;
  }
}

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error(
    "Missing BLOB_READ_WRITE_TOKEN. Set it before running:\n" +
      '  $env:BLOB_READ_WRITE_TOKEN="vercel_blob_rw_xxx"; npm run upload-blob'
  );
  process.exit(1);
}

const entries = await readdir(FILES_DIR);
const pdfs = entries.filter((f) => f.toLowerCase().endsWith(".pdf"));

if (pdfs.length === 0) {
  console.error(`No PDFs found in ${FILES_DIR}.`);
  process.exit(1);
}

console.log(`Uploading ${pdfs.length} PDF(s) to Vercel Blob...\n`);

const results = [];
for (const name of pdfs) {
  const body = await readFile(path.join(FILES_DIR, name));
  const { url } = await put(name, body, {
    access: "public",
    addRandomSuffix: false, // keep clean, predictable filenames
    allowOverwrite: true, // safe to re-run
    contentType: "application/pdf",
    token,
  });
  results.push({ name, url });
  console.log(`  ✓ ${name}`);
}

// All blobs share the same origin; the app rebuilds each URL from the filename.
const base = new URL(results[0].url).origin;

console.log("\nDone.\n");
console.log("Add this to your Vercel env vars (and .env.local):\n");
console.log(`  NEXT_PUBLIC_BLOB_BASE_URL=${base}\n`);
console.log("Uploaded URLs (for reference):");
for (const r of results) console.log(`  ${r.url}`);
