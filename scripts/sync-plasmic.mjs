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

const projectId = process.env.PLASMIC_PROJECT_ID;
const host = process.env.PLASMIC_HOST || "http://localhost:3003";

if (!projectId) {
  console.error("Defina PLASMIC_PROJECT_ID antes de executar npm run codegen.");
  process.exit(1);
}

const result = spawnSync(
  process.execPath,
  [
    plasmicCli,
    "sync",
    "--yes",
    "--skip-upgrade-check",
    "--projects",
    projectId
  ],
  {
    env: {
      ...process.env,
      PLASMIC_AUTH_HOST: host
    },
    stdio: "inherit"
  }
);

if (result.error) {
  console.error(`Não foi possível executar o Codegen: ${result.error.message}`);
  process.exitCode = 1;
} else {
  process.exitCode = result.status ?? 1;
}
