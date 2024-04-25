// Date, Generators, Modules
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

// التكليف 05
function assign5() {
  console.log("// Assignment 05");
  // =========================
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
  let time = performance.now();
  console.log(`Loop Took ${time} Milliseconds.`);
  // Needed Output
  // "Loop Took 1921 Milliseconds."
}
assign5();
console.log("=".repeat(25));

// التكليف 06
function assign6() {
  console.log("// Assignment 06");
  // =========================
  
}
assign6();
console.log("=".repeat(25));
