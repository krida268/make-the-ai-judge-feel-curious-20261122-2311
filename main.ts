// The Lamp Left Unlit — make-the-ai-judge-feel-curious-20261122-2311
// A program that writes one short text to /output/entry.txt.
// No network, no clock, no randomness: the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The lighthouse keeper leaves one lamp unlit every night. " +
  "Not broken — unlit, on purpose. " +
  "Old sailors say the dark lamp guides the ships that have not been built yet. " +
  "Tonight, after forty silent years, someone knocked twice — and is still waiting outside.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
