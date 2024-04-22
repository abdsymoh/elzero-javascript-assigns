// ------------------------------------------------
// Date And Time Introduction
// ------------------------------------------------
function Introduction() {
  console.log("-".repeat(48));
  console.log("Date And Time Introduction");
  console.log("-".repeat(48));

  // ----------
  let dateNow = new Date();
  console.log(`${dateNow}`);
  // Seconds
  let seconds = Math.floor(Date.now() / 1000);
  console.log(`${seconds} Seconds`);
  // Minutes
  let minutes = Math.floor(seconds / 60);
  console.log(`${minutes} Minutes`);
  // Hours
  let hours = Math.floor(minutes / 60);
  console.log(`${hours} Hours`);
  // Days
  let days = Math.floor(hours / 24);
  console.log(`${days} Days`);
  // Months
  let months = Math.floor(days / 12);
  console.log(`${months} Months`);
  // Years
  let years = Math.floor(days / 365);
  console.log(`${years} years`);
}
Introduction();
// ------------------------------------------------
console.log("-".repeat(48));
// ------------------------------------------------
// Get Date And Time
// ------------------------------------------------
function getDateAndTime() {
  console.log(`Get Date And Time Methods`);
  console.log("-".repeat(48));
  // ----------
  let dateNow = new Date();
  console.log(`${dateNow}`);
  let birthday = new Date("12 9 94");
  console.log(`${birthday}`);
  let dateDiff = dateNow - birthday;
  console.log(`My Age: ${Math.floor(dateDiff / 1000 / 60 / 60 / 24 / 365)} Years Old`);
  // ----------
  console.log("----------");
  // ----------
  let nowDateAndTime = new Date();
  let day = nowDateAndTime.getDate();
  let month = nowDateAndTime.getMonth() + 1;
  let year = nowDateAndTime.getFullYear();
  let hours = nowDateAndTime.getHours();
  let minutes = nowDateAndTime.getMinutes();
  let seconds = nowDateAndTime.getSeconds();
  console.log(`Date: ${String(day).length == 1 ? "0" + day : day}/${String(month).length == 1 ? "0" + month : month}/${year}\nTime: ${String(hours).length == 1 ? "0" + hours : hours}:${String(minutes).length == 1 ? "0" + minutes : minutes} ${hours < 12 ? "AM" : "PM"}`);
}
getDateAndTime();
// ------------------------------------------------
console.log("-".repeat(48));
// ------------------------------------------------
// Set Date And Time
// ------------------------------------------------
function setDateAndTime() {
  console.log(`Set Date And Time Methods`);
  console.log("-".repeat(48));
  // ----------
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateNow = new Date();
  dateNow.setDate(0);
  let monthNumber = dateNow.getMonth();
  let monthName = months[monthNumber];
  console.log(`${dateNow}`);
  console.log(`Previous Month Is ${monthName} And Last Day Is ${dateNow.getDate()}`);
}
setDateAndTime();
// ------------------------------------------------
console.log("-".repeat(48));
// ------------------------------------------------
// Formatting  Date And Time
// ------------------------------------------------
function formattingDateAndTime() {
  console.log(`Formatting  Date And Time Methods`);
  console.log("-".repeat(48));
  // ----------
  let date1 = new Date(0);
  console.log(date1);
  // ----------
  console.log("----------");
  console.log(`My Date in Milestones: ` + Date.parse("Dec 09, 94"));
  let date2 = new Date(786924000000);
  console.log(date2);
  console.log("----------");
  // ----------
  let date3 = new Date("12-09-1994");
  console.log(date3);
  console.log("----------");
  // ----------
  let date4 = new Date("1994-12-09");
  console.log(date4);
  console.log("----------");
  // ----------
  let date5 = new Date("1994-12");
  console.log(date5);
  console.log("----------");
  // ----------
  let date6 = new Date("1994");
  console.log(date6);
  console.log("----------");
  // ----------
  let date7 = new Date(1994, 11, 9, 1, 10, 5);
  console.log(date7);
  console.log("----------");
  // ----------
  let date8 = new Date(1994, 11, 9);
  console.log(date8);
  console.log("----------");
  // ----------
  let date9 = new Date("1994-12-09T06:10:00Z");
  console.log(date9);
}
formattingDateAndTime();
// ------------------------------------------------
console.log("-".repeat(48));
// ------------------------------------------------
// Tracking Operations Time
// ------------------------------------------------
function trackingOperationsTime() {
  console.log(`Tracking Operations Time`);
  console.log("-".repeat(48));
  // ----------
  // Start Time
  let start = new Date();

  // Operation
  for (let i = 0; i < 100000; i++) {
    document.write(`
    <div>div ${i + 1}</div>
    `);
  }
  // End Time
  let end = new Date();

  // Operation Duration
  let duration = end - start;
  console.log(`${duration / 1000} Secondes`);
}
trackingOperationsTime();
