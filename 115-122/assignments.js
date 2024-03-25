// التكليف 01
function assignOne() {
  let myNumbers = [1, 2, 3, 4, 5];
  const [a, , , , e] = myNumbers;
  console.log(a * e); // 5
}
assignOne();
console.log("=".repeat(25));

// التكليف 02
function assignTwo() {
  let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
  const [a, b, c, [d, e, [f, g]]] = mySkills;
  console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
  // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
}
assignTwo();
console.log("=".repeat(25));

// التكليف 03
function assignThree() {
  let arr1 = ["Ahmed", "Sameh", "Sayed"];
  let arr2 = ["Mohamed", "Gamal", "Amir"];
  let arr3 = ["Haytham", "Shady", "Mahmoud"];
  // Play With Arrays To Prepare For Destructuring
  let myFriends = arr1.concat(arr2, arr3);
  // Write Your Destructuring Assignment Here
  const [c, , , , , , , a, b] = myFriends;
  console.log(`My Best Friends: ${a}, ${b}, ${c}`);
  // My Best Friends: Shady, Mahmoud, Ahmed
}
assignThree();
console.log("=".repeat(25));

// التكليف 04
function assignFour() {
  const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };

  // Write Your Destructuring Assignment Here
  const {
    age: a,
    working: w,
    country: c,
    hobbies: [h1, , h3],
  } = member;
  console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working

  console.log(`I Live in ${c}`);
  // I Live in Egypt

  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming
}
assignFour();
console.log("=".repeat(25));

// التكليف 05

function assignFive() {
  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };

  // Write Your Destructuring Assignment/s Here
  const { title: t, developer: d, releases } = game;
  const [o, a] = Object.keys(releases);
  const [[u, j], { US: u_price, JAP: j_price }, or] = Object.values(releases);

  console.log(`My Favorite Games Style Is ${t} Style`);
  // My Favorite Games Style Is YS Style

  console.log(`And I Love ${d} Games`);
  // And I Love Falcom Games

  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan

  console.log(`Although I Love ${a}`);
  // Although I Love Ark Of Napishtim

  console.log(`${a} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD

  console.log(`${a} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD

  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD
}
assignFive();
console.log("=".repeat(25));

// التكليف 06
function assignSix() {
  let chosen = 1;

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
}
assignSix();
