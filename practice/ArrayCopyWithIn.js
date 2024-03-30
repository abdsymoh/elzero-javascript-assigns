let myArray = [10, 20, 30, 40, 50, "A", "B"];
// console.log(myArray.copyWithin(1, -2)); // [10, "A", "B", 40, 50, "A", "B"]
console.log(myArray.copyWithin(1, -2, -1)); // [10, "A", 30, 40, 50, "A", "B"]
