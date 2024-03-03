// Reduce
console.log("=".repeat(3), "[Reduce Practice]", "=".repeat(3));

// Longest Word
console.log("=".repeat(25));
console.log("= Task: Longest Word");
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
let reduceWord = theBiggest.reduce((acc, curr) => acc.length > curr.length ? acc : curr)
console.log(`== Result : ${reduceWord}`);

console.log("=".repeat(25));

// Longest Word
console.log("=".repeat(25));
console.log("= Remove Characters + Use Reduce");
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let rmChars = removeChars.filter((ele) => ele !== "@").reduce((acc, curr) => `${acc}${curr}`)
console.log(`== Result : ${rmChars}`);

console.log("=".repeat(25));
