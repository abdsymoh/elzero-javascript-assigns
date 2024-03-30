// Array.from()

// Array.copyWithin()
let myArray = [10, 20, 30, 40, 50, "A", "B"];
// console.log(myArray.copyWithin(1, -2)); // [10, "A", "B", 40, 50, "A", "B"]
console.log(myArray.copyWithin(1, -2, -1)); // [10, "A", 30, 40, 50, "A", "B"]

// Array.some()
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("#".repeat(20));
let range = {
  min: 10,
  max: 20,
};
let checkNumberInRange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);
console.log(checkNumberInRange);
console.log("#".repeat(20));

// Array.every()

const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};
let mainLocation = 15;
let locationsArray = Object.keys(locations).map((n) => +n);

let check = locationsArray.every(function (n) {
  return n > this;
}, mainLocation);

console.log(locationsArray);
console.log(check);
