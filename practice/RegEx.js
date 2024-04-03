// Regular Expressions

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe)); // Os8Os

console.log("#".repeat(20));

let myString = "AaBbcdefG123!234%^&*";
// [a-z]
// [^a-z]
// [A-Z]
// [^A-Z]
// [abc]
// [^abc]
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specialsOnly = /[^a-zA-Z0-9]/g;
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specialsOnly));

console.log("#".repeat(20));

// Regular Expressions - Character Classes
let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let validEmail = /\w@\w.(com|net)/g;
console.log(email.match(validEmail));

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let spamFilter = /(\bspam|spam\b)/gi;
console.log(names.match(spamFilter));
console.log(spamFilter.test(names));

console.log("#".repeat(20));

// Regular Expressions - Quantifiers

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

/*
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/gi)); // S[Three Numbers]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Numbers]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Lest Four Numbers]S

console.log("#".repeat(20));

// Regular Expressions - Replace With Pattern
let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let txtRe = /@/gi;
console.log(txt.replaceAll(txtRe, "JavaScript"));

console.log("#".repeat(20));

// Regular Expressions - Form Validation


