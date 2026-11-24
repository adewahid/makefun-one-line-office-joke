import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I BCC'd my manager on an email to myself so it would look like I have a team.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
