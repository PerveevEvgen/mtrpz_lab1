import chalk from "chalk";

export function solveEquation(a, b, c) {
  console.log(`Equation is: (${a})x^2 + (${b})x +(${c}) = 0 `);
  if (a === 0) return console.log("a must be not 0");
  let discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    console.log(chalk.red("0 roots"));
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    console.log(chalk.yellow(`1 root is:\nx = ${x}`));
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(chalk.yellow(`2 roots are:\n x1 = ${x1}\n x2 = ${x2}`));
  }
}
