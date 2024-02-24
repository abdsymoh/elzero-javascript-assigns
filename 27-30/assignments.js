// ep. 27 task
let theName = "  Ahmed  ";
console.log(theName.trim().charAt(2).toUpperCase());

// ep. 29 task
let a = "Elzero Web School";
console.log(a.substring(a.length - 5, a.length - 3));

// assign 1
let userName = "Elzero";
console.log(userName.charAt(3)); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.split("", 1).toString().toLowerCase()); // e
console.log(userName[3].repeat(3)); // eee

//assign 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE)); // True
console.log(word.toUpperCase().includes(letterO)); // True
