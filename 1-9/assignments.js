// assign 2
document.write("<h1 id='title'>Elzero</h1>");
document.getElementById("title").style = `
  color: blue;
  font-size: 80px;
  font-weight: bold;
  text-align: center;
  font-family: Arial
`;

// assign 3
console.log("%cElzero %cWeb %cSchool", "color: red; font-size:40px;", "color: green; font-size:40px; font-weight: bold;", "background-color: blue; font-size:40px;");

// assign 4
console.group("Group 1")
console.log("Message One")
console.log("Message Two")
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
