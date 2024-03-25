/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: n,
  theAge: a,
  skills: [one, two, three],
  addresses: { egypt: eg },
} = user;

console.log(`Your name is : ${n}`);
console.log(`Your age is : ${a}`);
console.log(`Your Skills is : ${one}, ${two}, ${three}`);
console.log(`You live in : ${eg}`);
