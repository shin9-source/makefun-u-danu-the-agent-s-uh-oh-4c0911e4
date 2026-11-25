import * as fs from "node:fs";

const word = "Recalculating";

fs.writeFileSync("/output/entry.txt", word);
