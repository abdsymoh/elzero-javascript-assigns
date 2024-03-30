// Array.from()

// Array.copyWithin()
let myArray = [10, 20, 30, 40, 50, "A", "B"];
// console.log(myArray.copyWithin(1, -2)); // [10, "A", "B", 40, 50, "A", "B"]
console.log(myArray.copyWithin(1, -2, -1)); // [10, "A", 30, 40, 50, "A", "B"]

// Array.some()
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let check = nums.some(function (e) {
  console.log("بسم الله الرحمن الرحيم");
  return e > 5;
});
// let check = nums.some((e) => e < 5);
console.log(check);

console.log("#".repeat(20));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);
