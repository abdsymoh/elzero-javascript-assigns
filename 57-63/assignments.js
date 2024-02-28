// Assignment #1
console.log("=".repeat(25));
console.log("= Assignment #1");
console.log("=".repeat(25));

function sayHello(theName, theGender) {
  console.log(theGender === "Male" ? `Hello Mr. ${theName}` : theGender === "Female" ? `Hello Miss. ${theName}` : theGender === undefined ? `Hello ${theName}` : `You Should Enter Your Name!`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("=".repeat(25));

// Assignment #2
console.log("= Assignment #2");
console.log("=".repeat(25));

function calculate(firstNum, secondNum, operation) {
  switch (operation) {
    case "add":
      console.log(firstNum + secondNum);
      break;
    case "subtract":
      console.log(firstNum - secondNum);
      break;
    case "multiply":
      console.log(firstNum * secondNum);
      break;
    default:
      if (secondNum === undefined) {
        console.log(`Second Number Not Found`);
      } else {
        console.log(firstNum + secondNum);
      }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("=".repeat(25));

// Assignment #3
console.log("= Assignment #3");
console.log("=".repeat(25));

function ageInTime(theAge) {
  // المطلوب طباعة عمرك بالشهور والأسابيع والأيام والساعات والدقائق والثواني

  let months = theAge * 12;
  let weeks = theAge * 52;
  let days = theAge * 365;
  let hours = theAge * 8760;
  let minutes = theAge * 525600;
  let seconds = theAge * 3.154e7;

  if (theAge > 10 && theAge < 100) {
    console.log(`Age Out Of Range`);
    console.log(`- ${theAge} Years,
- ${months} Months,
- ${weeks} Weeks,
- ${days} Days,
- ${hours} Hours
- ${minutes} Minutes,
- ${seconds} Seconds.
`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log("=".repeat(25));

// Assignment #4
console.log("= Assignment #4");
console.log("=".repeat(25));

function checkStatus(a, b, c) {
  let name = typeof a === typeof "string" ? `Hello ${a}` : typeof b === typeof "string" ? `Hello ${b}` : typeof c === typeof "string" ? `Hello ${c}` : "Unknown";
  let age = typeof a === typeof 0 ? `Your Age Is ${a}` : typeof b === typeof 0 ? `Your Age Is ${b}` : typeof c === typeof 0 ? `Your Age Is ${c}` : "Unknown";
  let status = a === true ? `You Are Available For Hire` : a === false ? `You Are Not Available For Hire` : b === true ? `You Are Available For Hire` : b === false ? `You Are Not Available For Hire` : c === true ? `You Are Available For Hire` : c === false ? `You Are Not Available For Hire` : "Unknown";
  return `${name}, ${age}, ${status},`;
}

// Needed Output
console.log(checkStatus("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(checkStatus(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("=".repeat(25));

// Assignment #5
console.log("= Assignment #5");
console.log("=".repeat(25));
console.log("in HTML Document");
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

console.log("=".repeat(25));

// Assignment #6
console.log("= Assignment #6");
console.log("=".repeat(25));

function multiply(...array) {
  let noStringArr = [];
  let multiply = 0;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] !== typeof "string") {
      noStringArr.push(parseInt(array[i]));
    }
  }
  console.log(noStringArr.reduce((a, b) => a * b, 1));
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

console.log("=".repeat(25));
