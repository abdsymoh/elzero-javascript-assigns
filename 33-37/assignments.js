// assign 1
let num = 99;
if (num < 10) {
  num = `00${num}`;
  console.log(num);
} else if (num >= 10 && num < 100) {
  num = `0${num}`;
  console.log(num);
} else {
  num = `${num}`;
  console.log(num);
}

console.log("=================================");

// assign 2
let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
  if (typeof num1 != typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
  }
  if (num1 != str2 && num1 !== str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
  }
  if (str != str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
  }
}

console.log("=================================");

// assign 3
let num_1 = 10;
let num_2 = 30;
let num_3 = "30";

// Needed Output
if (num_3 > num_1 && typeof num_3 != typeof num_2 &&  num_3 == num_2 && num_3 != num_1 && typeof num_3 != typeof num_1) {
  console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
  console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
  console.log(`${num_3} Value And Type Is Not The Same As ${num_1} And Type Is Not The Same As ${num_2}`)
}

console.log("=================================");
