// makefun-x-reposts-02 entry program.
//
// Copies POSTS.json from the repository root into the output directory
// given by MAKEFUN_OUTPUT_DIR. The repository directory defaults to the
// current working directory and can be overridden with MAKEFUN_BOT_DIR.
// No network, no clock, no files outside the repository: the copy is
// byte-for-byte, so repeated runs write identical bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "out");

const source = join(botDir, "POSTS.json");
const target = join(outputDir, "POSTS.json");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy is byte-for-byte identical, so a partial or
// corrupted write fails loudly instead of shipping a wrong file.
if (!readFileSync(source).equals(readFileSync(target))) {
  throw new Error("POSTS.json copy does not match the source");
}
