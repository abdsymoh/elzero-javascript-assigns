console.log("Elzero JavaScript Ep. 47 Challenge");
console.log("==========");

/*
  Array Challenge
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
my.push("Elzero")

// Write Code Here

console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]

console.log(my[my.length - +zero]); // "Elzero"

console.log(my[my.length - +zero].slice(++counter).replace("o", "O")); // "rO"
