// Assignment #1
console.log("Assignment #1");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(-num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(-num)); // ["Ahmed", "Elham", "Osama"];

console.log("==========");

// Assignment #2
console.log("Assignment #2");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop();
friends.shift();

// Write Your Code Here

console.log(friends); // ["Eman", "Osama"]

console.log("==========");

// Assignment #3
console.log("Assignment #3");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

console.log("==========");

// Assignment #4
console.log("Assignment #4");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[+true + +true][0].slice(+true + +true).toUpperCase()); // ZERO

console.log("==========");

// Assignment #5
console.log("Assignment #5");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
let result = haystack.includes(needle);
if (result === true) {
  console.log("Found");
} else {
  console.log("Not Found");
}
result === true ? console.log("Found") : console.log("Not Found");
switch (result) {
  case false:
    console.log("Not Found");
    break;
  default:
    console.log("Found");
}

console.log("==========");

// Assignment #6
console.log("Assignment #6");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1, arr2).sort().slice(-true + -true + -true).join("").toLowerCase()); // fxy

console.log("==========");
