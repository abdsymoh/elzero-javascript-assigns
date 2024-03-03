// Assignment #1
console.log("= Assignment #1");
console.log("=".repeat(25));

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"].map((ele) => (typeof ele === typeof "" ? ele : "")).reduce((acc, curr) => acc + curr);
console.log(mix); // Elzero

console.log("=".repeat(25));

// Assignment #2
console.log("= Assignment #2");
console.log("=".repeat(25));

let myString = "EElllzzzzzzzeroo";
console.log(
  myString
    .split("")
    .filter((ele, index) => myString.indexOf(ele) === index)
    .join("")
); // Elzero

console.log("=".repeat(25));

// Assignment #3
console.log("= Assignment #3");
console.log("=".repeat(25));

let myArray = ["E", "l", "z", ["e", "r"], "o"].reduce((acc, curr) => acc + curr).replace(",", "");
console.log(myArray); // Elzero

console.log("=".repeat(25));

// Assignment #4
console.log("= Assignment #4");
console.log("=".repeat(25));

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsArray = numsAndStrings.filter((ele) => !isNaN(parseInt(ele))).map((ele) => -ele);
console.log(numsArray); // [-1, -10, 10, 20, -5, -3]

console.log("=".repeat(25));

// Assignment #5
console.log("= Assignment #5");
console.log("=".repeat(25));

let nums = [2, 12, 11, 5, 10, 1, 99];
let numsReduce = nums.reduce((acc, curr) => curr % 2 === 0 ? acc * curr : acc + curr)
console.log(numsReduce); // 500

console.log("=".repeat(25));
