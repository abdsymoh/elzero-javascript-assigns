// Elzero JavaScript Ep. 37 Challenge

// If Condition Challenge

let a = 10;
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("Unknown");

let st = "Elzero Web School";

if (typeof st === typeof "34") {
  console.log("Good");
}

if (st.toLowerCase().match("w").toString() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}
if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2)  === "ElzeroElzero") {
  console.log("Good");
}
