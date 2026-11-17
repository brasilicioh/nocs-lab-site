import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const textExtensions = new Set([".css", ".html", ".js", ".json", ".txt"]);

async function patchFile(filePath) {
  if (!textExtensions.has(path.extname(filePath))) {
    return;
  }

  const contents = await readFile(filePath, "utf8");
  const patchedContents = contents.replaceAll(
    '"/plasmic/',
    `"${basePath}/plasmic/`
  ).replaceAll(
    "'/plasmic/",
    `'${basePath}/plasmic/`
  ).replaceAll(
    "url(/plasmic/",
    `url(${basePath}/plasmic/`
  );

  if (patchedContents !== contents) {
    await writeFile(filePath, patchedContents);
  }
}

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(filePath);
    } else {
      await patchFile(filePath);
    }
  }
}

await stat(outputDirectory);
await walk(outputDirectory);
