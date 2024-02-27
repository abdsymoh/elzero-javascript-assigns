// Assignment #1
console.log("Assignment #1");

let s1 = 10;
let e1 = 100;
let exclude = 40;
// Output
/*
10
20
30
50
60
70
80
90
100
*/
for (i = s1 - s1; i < e1; ) {
  i += s1;
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

console.log("=".repeat(25));

// Assignment #2
console.log("Assignment #2");

let s2 = 10;
let e2 = 0;
let stop = 3;

// Output
/*
10
09
08
07
06
05
04
03
*/
console.log(s2.toString());
for (i = s2; i >= e2; i--) {
  if (i === stop) {
    break;
  }
  if (i < s2) {
    console.log(`0${i}`);
  }
}

console.log("=".repeat(25));

// Assignment #3
console.log("Assignment #3");

let s3 = 1;
let e3 = 6;
let breaker = 2;

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/

for (i = s3; i <= e3; i++) {
  console.log(i);
  for (x = s3 - s3; x < e3; ) {
    x += s3 + s3;
    console.log(`-- ${x}`);
    if (x === e3 - (s3 + s3)) {
      break;
    }
  }
}

console.log("=".repeat(25));

// Assignment #4
console.log("Assignment #4");

let index = 10;
let jump = 2;

// Output
/*
10
8
6
4
*/

for (;;) {
  if (index > index - index) {
    console.log(index);
    index -= jump;
  }
  if (index === jump) {
    break;
  }
}
// for (i = s2; i >= e2; i--) {
//   if (i === stop) {
//     break;
//   }
//   if (i < s2) {
//     console.log(`0${i}`);
//   }
// }

console.log("=".repeat(25));

// Assignment #5
console.log("Assignment #5");

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
/*
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/

for (i = +true - +true; i < friends.length; i++) {
  if (friends[i][+true - +true].toLowerCase() === letter) {
    continue;
  }
  console.log(friends[i]);
}

console.log("=".repeat(25));

// Assignment #6
console.log("Assignment #6");

let s4 = 0;
let swappedName = "elZerO";
let output = "";

// Output
/*
"ELzERo"
*/
for (let i = s4; i < swappedName.length; i++) {
  output += swappedName[i].toUpperCase() === swappedName[i] ? swappedName[i].toLowerCase() : swappedName[i].toUpperCase();
}
console.log(output);

console.log("=".repeat(25));

// Assignment #7
console.log("Assignment #7");
let s5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
/*
2
3
4
*/
for (; s5 < mix.length; ) {
  s5++;
  if (typeof mix[s5] === "number") {
    console.log(mix[s5]);
  }
}

console.log("=".repeat(25));
