// Date, Generators, Modules
let log = console.log;

console.log("Date, Generators and Modules Assignments");
console.log("=".repeat(25));

// التكليف 01
function assign1() {
  console.log("// Assignment 01");
  // =========================

  let start = Date.now() / 1000;
  let end = new Date("12 9 94") / 1000;
  // My Age in :

  let seconds = Math.floor(start - end);
  console.log(`${Math.floor(seconds)} Seconds`);

  let minutes = Math.floor(seconds / 60);
  console.log(`${Math.floor(minutes)} Minutes`);

  let hours = Math.floor(minutes / 60);
  console.log(`${Math.floor(hours)} Hours`);

  let days = Math.floor(hours / 24);
  console.log(`${Math.floor(days)} Days`);

  let months = Math.floor(days / 30);
  console.log(`${Math.floor(months)} Months`);

  let years = Math.floor(days / 365);
  console.log(`${Math.floor(years)} Years`);

  // console.log(`${}`);

  // Needed Output
  /**
  Needed Output
  "1247939400 Seconds"
  "20798990 Minutes"
  "346650 Hours"
  "14444 Days"
  "481 Months"
  "40 Years"
 */
}
assign1();
console.log("=".repeat(25));

// التكليف 02
function assign2() {
  console.log("// Assignment 02");
  // =========================
  let date = new Date(1980, 0, 1, 0, 0, 1);
  console.log(date);

  // Needed Output
  // "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
}
assign2();
console.log("=".repeat(25));

// التكليف 03
function assign3() {
  console.log("// Assignment 03");
  // =========================
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateNow = new Date();
  dateNow.setDate(0);
  let monthNumber = dateNow.getMonth();
  let monthName = months[monthNumber];
  console.log(`${dateNow}`);
  console.log(`Previous Month Is ${monthName} And Last Day Is ${dateNow.getDate()}`);

  // Needed Output
  // "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
  // "Previous Month Is April And Last Day Is 30"
}
assign3();
console.log("=".repeat(25));

// التكليف 04
function assign4() {
  console.log("// Assignment 04");
  // =========================
  let birthOne = new Date("12 9 94");
  console.log(`${birthOne}`);

  let birthTwo = new Date();
  birthTwo.setMonth(11);
  birthTwo.setDate(9);
  birthTwo.setFullYear(1994);
  birthTwo.setHours(0);
  birthTwo.setMinutes(0);
  birthTwo.setSeconds(0);
  console.log(`${birthTwo}`);

  let birthThree = new Date(1994, 11, 9);
  console.log(`${birthThree}`);

  // Needed Output
  // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
  // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
  // "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
}
assign4();
console.log("=".repeat(25));

// // التكليف 05
// function assign5() {
//   console.log("// Assignment 05");
//   // =========================
//   let t0 = performance.now();
//   for (let i = 0; i < 1000; i++) {
//     console.log(i);
//   }
//   let t1 = performance.now();
//   console.log(`Loop Took ${t1 - t0} Milliseconds.`);
//   // Needed Output
//   // "Loop Took 1921 Milliseconds."
// }
// assign5();
// console.log("=".repeat(25));

// التكليف 06
function assign6() {
  console.log("// Assignment 06");
  // =========================
  function* gen() {
    yield 14;
    yield 154;
    yield 494;
    yield 1034;
    yield 1774;
    yield 2714;
    yield 3854;
    yield 5164;
    yield 6734;
  }
  let generator = gen();
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());
}
assign6();
console.log("=".repeat(25));

// التكليف 07
function assign7() {
  console.log("// Assignment 07");
  // =========================
  function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  function* genAll() {
    yield* new Set(genNumbers());
    yield* new Set(genLetters());
  }
  let generator = genAll();
  log(generator.next());
  log(generator.next());
  log(generator.next());
  log(generator.next());
  log(generator.next());
  log(generator.next());
  log(generator.next());
  log(generator.next());
  log(generator.next());
}
assign7();
console.log("=".repeat(25));

// التكليف 08
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
function assign8() {
  console.log("// Assignment 08");
  // =========================

  console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
}
assign8();
console.log("=".repeat(25));
