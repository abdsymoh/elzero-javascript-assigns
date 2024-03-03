// Filter
console.log("=".repeat(3), "[Filter Practice]", "=".repeat(3));

// Filter Words More Than 4 Characters
console.log("=".repeat(25));
console.log("= Task:  Filter Words More Than 4 Characters");
let sentence = "I Love Foood Code Too Playing Much";
let sentenceFilter = sentence
  .split(" ")
  .filter((ele) => ele.length <= 4)
  .join(" ");
console.log(`== Result : ${sentenceFilter}`);

console.log("=".repeat(25));

// Ignore Numbers
console.log("=".repeat(25));
console.log("= Task: Ignore Numbers");
let ignoreNumbers = "Elz123er4o";
let filterNumbers = ignoreNumbers
  .split("")
  .filter((ele) => isNaN(parseInt(ele)))
  .join("");
console.log(`== Result : ${filterNumbers}`);

console.log("=".repeat(25));

// Filter Strings + Multiply
console.log("=".repeat(25));
console.log("= Task: Filter Strings + Multiply");
let mix = "A13BS2ZX";
let filterString = mix
  .split("")
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => ele * ele)
  .join(" | ");
console.log(`== Result : ${filterString}`);

console.log("=".repeat(25));
