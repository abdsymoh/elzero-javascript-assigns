console.log("Elzero JavaScript Ep. 63 Challenge");

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(a = "Un", b = "Un", c = "Un") {
  let name = typeof a === typeof "string" ? `Hello ${a}` : typeof b === typeof "string" ? `Hello ${b}` : typeof c === typeof "string" ? `Hello ${c}` : "Unknown";
  let age = typeof a === typeof 0 ? `Your Age Is ${a}` : typeof b === typeof 0 ? `Your Age Is ${b}` : typeof c === typeof 0 ? `Your Age Is ${c}` : "Unknown";
  let status = a === true ? `You Are Available For Hire` : a === false ? `You Are Not Available For Hire` : b === true ? `You Are Available For Hire` : b === false ? `You Are Not Available For Hire` : c === true ? `You Are Available For Hire` : c === false ? `You Are Not Available For Hire` : "Unknown";
  return `${name}, ${age}, ${status},`;
}

console.log(showDetails("Osama", 38, true));
console.log(showDetails(38, "Osama", true));
console.log(showDetails(true, 38, "Osama"));
console.log(showDetails(false, "Osama", 38));

console.log("==========");
