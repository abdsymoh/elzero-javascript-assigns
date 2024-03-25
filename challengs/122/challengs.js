console.log("Elzero JavaScript Ep. 122 Challenge");
console.log("================");

/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

console.log(`=== Chosen [${chosen}] =`);
if (chosen == 1) {
  const [one] = myFriends;
  const {
    title: name,
    age,
    available,
    skills: [skillOne, skillTwo],
  } = one;
  console.log(`Name : ${name}`);
  console.log(`Age : ${age}`);
  if (available == true) {
    console.log(`Status : Available`);
  } else if (available == false) {
    console.log(`Status : Not Available`);
  }
  console.log(`Skills : ${skillTwo}`);
}
if (chosen == 2) {
  const [, two] = myFriends;
  const {
    title: name,
    age,
    available,
    skills: [skillOne, skillTwo],
  } = two;
  console.log(`Name : ${name}`);
  console.log(`Age : ${age}`);
  if (available == true) {
    console.log(`Status : Available`);
  } else if (available == false) {
    console.log(`Status : Not Available`);
  }
  console.log(`Skills : ${skillTwo}`);
}
if (chosen == 3) {
  const [, , three] = myFriends;
  const {
    title: name,
    age,
    available,
    skills: [skillOne, skillTwo],
  } = three;
  console.log(`Name : ${name}`);
  console.log(`Age : ${age}`);
  if (available == true) {
    console.log(`Status : Available`);
  } else if (available == false) {
    console.log(`Status : Not Available`);
  }
  console.log(`Skills : ${skillTwo}`);
}
console.log("================");
