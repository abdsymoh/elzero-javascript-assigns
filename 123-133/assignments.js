// التكليف 01
function assign1() {
  let setOfNumbers = new Set([10]);
  setOfNumbers.add(20).add(setOfNumbers.size);
  console.log(setOfNumbers);
  console.log([...setOfNumbers][2]);
  //   // Needed Output
  // Set(3) {10, 20, 2}
  // 2
}
assign1();
console.log("#".repeat(10));

// التكليف 02
function assign2() {
  let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
  console.log(Array.from(new Set(myFriends)).sort());
  // Needed Output
  // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
}
assign2();
console.log("#".repeat(10));

// التكليف 03
function assign3() {
  let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  let { username, role, country } = myInfo;
  let map = new Map();
  map.set("username", username).set("role", role).set("country", country);
  console.log(map);
  console.log(map.size);
  console.log(map.has("role"));

  // Needed Output
  // Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
  // 3
  // true
}
assign3();
console.log("#".repeat(10));

// التكليف 04
function assign4() {
  let theNumber = 100020003000;
  console.log(Number([...new Set([...theNumber.toString()])].sort().join("")));
  // Needed Output
  // 123
}
assign4();
console.log("#".repeat(10));

// التكليف 05
function assign5() {
  let theName = "Elzero";
  console.log(theName.split(""));
  console.log([...theName]);
  console.log(Array.from(theName));
  console.log(Object.assign([], theName));
  let arr = [];
  for (i = 0; i < theName.length; i++) {
    arr.push(theName[i]);
  }
  console.log(arr);
  // Needed Output
  // ['E', 'l', 'z', 'e', 'r', 'o']
}
assign5();
console.log("#".repeat(10));

// التكليف 06
function assign6() {
  // let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
  // let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
  let chars = ["Z", "Y", "A", "D", "E", 10, 1];
  let numbers = chars.filter((e) => !isNaN(e));
  let characters = chars.filter((e) => isNaN(e));
  let desiredOrder = [...numbers, ...characters];
  console.log(desiredOrder.copyWithin(0, numbers.length, numbers.length * 2));

  // Needed Output
  // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
  // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
  // ["Z", "Y", "Z", "Y", "A", "D", "E"]
}
assign6();
console.log("#".repeat(10));

// التكليف 07
function assign7() {
  let numsOne = [1, 2, 3];
  let numsTwo = [4, 5, 6];
  console.log([...numsOne, ...numsTwo]);
  console.log(numsOne.concat(numsTwo));
  let mergedArray = [];
  for (let num of numsOne) {
    mergedArray.push(num);
  }
  for (let num of numsTwo) {
    mergedArray.push(num);
  }
  console.log(mergedArray);
  // Needed Output
  // [1, 2, 3, 4, 5, 6]
}
assign7();
console.log("#".repeat(10));

// التكليف 08
function assign8() {
  let n1 = [10, 30, 10, 20];
  let n2 = [30, 20, 10];
  console.log([...n1, ...n2].length * Math.max(...n1));
  // Needed Output
  // 210
}
assign8();
console.log("#".repeat(10));
