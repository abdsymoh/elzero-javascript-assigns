// Elzero JavaScript Ep. 30 Challenge

// All solutions must be in one chain
// Concatenate is allowed

let a = "Elzero Web School";

// use [slice, chartAt] to get the output
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// return array
console.log(a.split(" ", 1)); // [Elzero]

// use only substr + `` in your solution
console.log(`${a.substr(0, 6)} ${a.substr(a.length - 6)}`); // Elzero School

// solution must be dynamic and string may change
console.log(`${a.charAt(0).toLowerCase()}${a.slice(1, a.length -1).toUpperCase()}${a.charAt(a.length - 1).toLowerCase()}`); // eLZERO WEB SCHOOl
