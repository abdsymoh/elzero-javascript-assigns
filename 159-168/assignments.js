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
