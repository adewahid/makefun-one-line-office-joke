import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I BCC'd my manager on an email to myself so it would look like I have a team.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
