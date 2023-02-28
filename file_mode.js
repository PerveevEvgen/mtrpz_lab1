import { solveEquation } from "./solve_function.js";
import fs from "fs";

export function fileMode(filename) {
  const fileDataParse = () => {
    const fileContents = fs.readFileSync(filename, "utf8");
    const lines = fileContents.split("\n");
    const a = parseFloat(lines[0]);
    const b = parseFloat(lines[1]);
    const c = parseFloat(lines[2]);
    return { a, b, c };
  };
  const { a, b, c } = fileDataParse();
  const result = solveEquation(a, b, c);
  console.log(result);
}
