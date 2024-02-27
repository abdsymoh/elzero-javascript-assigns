console.log("Elzero JavaScript Ep. 56 Challenge");

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let myAdminsCount = 0;
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    myAdminsCount += i;
    break;
  }
}
document.write(`<div>We Have ${myAdminsCount} Admins</div>`);
document.write(`<hr>`);

// Teams & Admins
for (let t = 0; t < myAdminsCount; t++) {
  document.write(`<p>The <b>Admin</b> For Team <b>${t + 1}</b> Is <b>${myAdmins[t]}</b></p>`);
  document.write(`<h3>Team [${t + 1}] Members:</h3>`);
  let counter = 1;
  for (m = 0; m < myEmployees.length; m++) {
    if (myEmployees[m][0] === myAdmins[t][0]) {
      document.write(`<p>[${counter++}] - ${myEmployees[m]}</p>`);
    }
  }
  document.write(`<hr>`);
}
document.write(`</div>`);

console.log("==========");
