#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const mode = process.argv[2];

if (!mode || (mode !== "dev" && mode !== "prod")) {
  console.error("Usage: node scripts/bump-version.mjs <dev|prod>");
  process.exit(1);
}

const packageJsonPath = path.resolve(process.cwd(), "package.json");
const packageJsonRaw = fs.readFileSync(packageJsonPath, "utf8");
const packageJson = JSON.parse(packageJsonRaw);

const semverMatch =
  /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+)\.(\d+))?$/.exec(packageJson.version);

if (!semverMatch) {
  console.error(`Unsupported version format: ${packageJson.version}`);
  process.exit(1);
}

const major = Number(semverMatch[1]);
const minor = Number(semverMatch[2]);
const patch = Number(semverMatch[3]);
const preId = semverMatch[4] ?? null;
const preNum = semverMatch[5] ? Number(semverMatch[5]) : null;

let nextVersion = packageJson.version;

if (mode === "dev") {
  if (preId === "dev" && Number.isInteger(preNum)) {
    nextVersion = `${major}.${minor}.${patch}-dev.${preNum + 1}`;
  } else {
    nextVersion = `${major}.${minor}.${patch + 1}-dev.0`;
  }
}

if (mode === "prod") {
  if (preId) {
    nextVersion = `${major}.${minor}.${patch}`;
  } else {
    nextVersion = `${major}.${minor}.${patch + 1}`;
  }
}

packageJson.version = nextVersion;
fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

console.log(`Version bumped (${mode}): ${packageJson.version}`);
