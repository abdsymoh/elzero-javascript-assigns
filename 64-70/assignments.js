// Assignment #1
console.log("= Assignment #1");
console.log("=".repeat(25));

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let initial = zName.split(" ")[1][0].toUpperCase();
    zName = `${zName.split(" ")[0]} ${initial}.`;
    return `Hello ${zName}`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return zCountry === "Egypt" ? "You Live In EG" : zCountry === "Syria" ? "You Live In SY" : "Unknown";
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log("=".repeat(25));

// Assignment #2
console.log("= Assignment #2");
console.log("=".repeat(25));

// function itsMe() {
//   return `Iam A Normal Function`;
// }
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("=".repeat(25));

// Assignment #3
console.log("= Assignment #3");
console.log("=".repeat(25));

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     };
//   };
// }

let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("=".repeat(25));

// // Assignment #4
// console.log("= Assignment #4");
// console.log("=".repeat(25));

// function specialMix(...data) {
//   for (let i = 0; i < data.length; i++) {

//     let onlyNumbers = data.filter((str) => /\d/.test(str)).map((i) => parseInt(i));
//     return onlyNumbers;
//   }
//   return data;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// console.log("=".repeat(25));
