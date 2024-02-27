// Assignment #1
console.log("Assignment #1");
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
/*
"1 => Sayed"
"2 => Mahmoud"
*/

while (index < friends.length) {
  if (friends[index][+false] !== "A" && typeof friends[index] !== "number") {
    counter++
    console.log(`${counter} => ${friends[index]}`);
  }

  index++;
}
console.log("=".repeat(25));
