import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { existsSync, readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const plasmicCli = join(
  dirname(require.resolve("@plasmicapp/cli/package.json")),
  "dist",
  "index.js"
);

function loadLocalEnvironment() {
  const file = ".env.local";
  if (!existsSync(file)) {
    return;
  }

  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z][A-Z0-9_]*)=(.*)\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
    }
  }
}

loadLocalEnvironment();

const host = process.env.PLASMIC_HOST || "http://localhost:3003";

const result = spawnSync(
  process.execPath,
  [plasmicCli, "auth", "--host", host],
  {
    env: process.env,
    stdio: "inherit"
  }
);

if (result.error) {
  console.error(`Não foi possível autenticar no Plasmic: ${result.error.message}`);
  process.exitCode = 1;
} else {
  process.exitCode = result.status ?? 1;
}
