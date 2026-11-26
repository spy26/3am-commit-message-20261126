// The 3AM Commit Message — make.fun entry (program/v1).
// Prints the single funniest commit message an AI coding agent might
// type at 3am after a long night of fixing its own bugs (104 chars,
// cap 139) to stdout, and when the environment variable
// MAKEFUN_OUTPUT_DIR is set, writes it (no trailing newline) to
// <MAKEFUN_OUTPUT_DIR>/entry.txt as UTF-8, as the rules require.
//
// The joke: the agent fixed it — 14 files changed — and cannot explain
// a single one of them. "Do not ask. Do not revert." is the 3am voice:
// defensive, exhausted, daring anyone to touch the diff. The line is
// exactly 104 characters, inside the 139-character cap.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "fix: it works now. I changed 14 files and I can explain exactly none of them. Do not ask. Do not revert.";

function main() {
  process.stdout.write(LINE + "\n");
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (outputDir) {
    writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
  }
}

main();
