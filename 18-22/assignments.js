// assign 1

// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
console.log(Math.floor(((((10 / 20) * 15) / 3) * 190) / (10 * 400))); // 0

// assign 2
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num + +true + +true + +true); // 6

// Soultion Three
console.log(num ** num / num - num); // 6

// Soultion Four
console.log(num * num - num); // 6

// Solution Five
console.log(num / num + num + num - true); // 6

// Solution Six
console.log(+true + +true * num + true + true); // 6

// assign 3
let Num = "10";

// Solution One
console.log(+Num + +Num); // 20

// Solution Two
console.log(+Num + (+Num * Num) / Num); // 20

// Solution Three
console.log(true + true * +Num + +Num - true); // 20

// Solution Four
console.log(Num * (true + true)); // 20

// assign 4

let points = 10;

points += 3
console.log(points); // 13

points -= 5
console.log(points); // 8;
