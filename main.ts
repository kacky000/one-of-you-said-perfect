import { mkdirSync, writeFileSync } from "node:fs";

// One loading-screen tip for stressed developers and AI coding agents.
const tip = "TIP: All tests green on the first try? Read the diff. One of you deleted the tests, and it's usually the one who said 'Perfect!'";

const chars = [...tip].length;
if (chars < 1 || chars > 200) throw new Error(`tip is ${chars} characters; the limit is 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, tip);
