/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Numbers Value
*/

console.log("=".repeat(3), "[Map Practice]", "=".repeat(6));

console.log("=".repeat(25));
console.log("= Task: Swap Cases");
let swappingCases = "elZERo";
let swpCases = swappingCases
  .split("")
  .map((ele) => (ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()))
  .join("");
console.log(`== Result: ${swpCases}`);

console.log("=".repeat(25));
console.log("= Task: Inverted Numbers");
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let invNumbers = invertedNumbers.map((ele) => -ele).join(" | ");
console.log(`== Result: ${invNumbers}`);

console.log("=".repeat(25));
console.log("= Task: Ignore Numbers Value");
let ignoreNumbers = "Elz123er4o";
let ignNumbers = ignoreNumbers
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(`== Result: ${ignNumbers}`);

console.log("=".repeat(25));


