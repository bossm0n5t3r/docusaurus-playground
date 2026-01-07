/* eslint-disable no-console */
import * as fs from "fs";
import * as path from "path";

const args = process.argv.slice(2);
const startIndex = args[0] === "--" ? 1 : 0;
const inputPath = (args[startIndex] || "").trim();
if (!inputPath) {
  console.error("Usage: pnpm run create-api-doc -- path/api/v1.0.0");
  process.exit(1);
}

const segments = inputPath.split("/").filter(Boolean);
if (segments.length === 0) {
  console.error("Invalid path. Example: path/api/v1.0.0");
  process.exit(1);
}

const versionSegment = segments[segments.length - 1];
const safeFileBase = versionSegment.replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
const fileName = `${safeFileBase || "api"}.md`;

const docsRoot = path.join(process.cwd(), "docs");
const targetDir = path.join(docsRoot, ...segments.slice(0, -1));
const filePath = path.join(targetDir, fileName);

if (fs.existsSync(filePath)) {
  console.log(`Already exists: ${filePath}`);
  process.exit(0);
}

fs.mkdirSync(targetDir, { recursive: true });

const apiTitle = `API ${versionSegment}`;
const template = `---
title: ${apiTitle}
---

# ${apiTitle}

## Overview

- Describe the purpose of this API.

## Base URL

\`/${segments.join("/")}\`

## Endpoints

### GET /example

- Description: ...
- Request: none
- Response: 200

## Error Codes

- 400: Bad Request
- 401: Unauthorized
- 500: Internal Server Error
`;

fs.writeFileSync(filePath, template, "utf8");
console.log(`Created: ${filePath}`);
