import chalk from "chalk";
import readline from "readline";
import { solveEquation } from "./solve_function.js";

export const consoleMode = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function userInput(question) {
    return new Promise((resolve) => {
      rl.question(`${question}`, (answer) => {
        if (isNaN(answer)) {
          console.log(chalk.red("Value is not a number!"));
          userInput(question).then(resolve);
        } else {
          resolve(parseFloat(answer));
        }
      });
    });
  }

  (async function () {
    let a = await userInput("Enter the coefficient a: ");
    let b = await userInput("Enter the coefficient b: ");
    let c = await userInput("Enter the coefficient c: ");
    console.log(
      `a = ${chalk.green(a)}\nb = ${chalk.green(b)}\nc = ${chalk.green(c)}`
    );
    solveEquation(a, b, c);
    rl.close();
  })();
};
