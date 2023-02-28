import { consoleMode } from "./interactive_mode.js";
import { fileMode } from "./file_mode.js";

function main() {
  const filename = "input.txt";
  if (process.argv.length < 3) {
    consoleMode();
  } else {
    fileMode(filename);
  }
}
main();
