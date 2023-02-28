import { solveEquation } from "./solve_function.js";
import { readFileSync, existsSync } from "fs";
import fs from "fs";

const isDataValid = (data) =>
  /^-?\d+(\.\d+)? -?\d+(\.\d+)? -?\d+(\.\d+)?$/.test(data);

export function fileMode(filename) {
  const filePath = process.argv[2];
  if (!existsSync(filePath)) {
    console.log(`Error: file ${filePath} does not exist`);
    return;
  }

  const fileData = readFileSync(filePath).toString();
  if (!isDataValid(fileData)) {
    console.log("invalid file format");
    return;
  }
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
