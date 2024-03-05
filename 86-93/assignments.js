// Assignment #1
console.log("=".repeat(1), "[Assignment #1]", "=".repeat(7));

console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.getElementsByTagName("div")[0]);
console.log(document.querySelector(".element"));
console.log(document.querySelector('[name="js"]'));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("div"));
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll('[name="js"]')[0]);
console.log(document.querySelectorAll("div")[0]);
console.log(document.body.children[0]);
console.log(document.body.firstElementChild);

console.log("=".repeat(25));

// Assignment #2
console.log("=".repeat(1), "[Assignment #2]", "=".repeat(7));

let allImages2 = document.querySelectorAll("img");
for (i = 0; i < 10; i++) {
  if (allImages2[i].hasAttribute("src")) {
    allImages2[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
  }
  if (allImages2[i].hasAttribute("alt")) {
    allImages2[i].setAttribute("alt", "Elzero Logo");
  }
  console.log(allImages2[i]);
}

console.log("=".repeat(25));

// Assignment #3
console.log("=".repeat(1), "[Assignment #3]", "=".repeat(7));

// get elements
let mainForm = document.forms[0];
let inputUSD = document.forms[0].firstElementChild;

// create elements
let eleDiv = document.createElement("div");
let divTextContent = document.createTextNode(`{0} USD Dollar = {0} Egyptian Pound`);
eleDiv.appendChild(divTextContent);
mainForm.appendChild(eleDiv);

// get the input value
inputUSD.onkeyup = function () {
  let inputValue = document.querySelector(`[name="dollar"]`).value;
  let egyptianPound = inputValue * 15.6;
  eleDiv.textContent = `{${inputValue}} USD Dollar = {${egyptianPound.toFixed(2)}} Egyptian Pound`;
};
inputUSD.onchange = function () {
  let inputValue = document.querySelector(`[name="dollar"]`).value;
  let egyptianPound = inputValue * 15.6;
  eleDiv.textContent = `{${inputValue}} USD Dollar = {${egyptianPound.toFixed(2)}} Egyptian Pound`;
};

document.querySelector(`[name="dollar"]`).value = "";

console.log("=".repeat(25));

// Assignment #4
console.log("=".repeat(1), "[Assignment #4]", "=".repeat(7));

document.querySelector(".one").textContent = "One";
document.querySelector(".two").textContent = "Two 2";

console.log("=".repeat(25));

// Assignment #5
console.log("=".repeat(1), "[Assignment #5]", "=".repeat(7));

let allImages5 = document.querySelectorAll(`[src="#"]`);
for (i = 0; i < allImages5.length; i++) {
  if (allImages5[i].hasAttribute("alt")) {
    allImages5[i].setAttribute("alt", "Old");
  } else {
    allImages5[i].setAttribute("alt", "Elzero New");
  }
  console.log(allImages5[i]);
}

console.log("=".repeat(25));

// Assignment #6
console.log("=".repeat(1), "[Assignment #6]", "=".repeat(7));

// create a container
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
let addFormToContainer = document.forms[1];
container.appendChild(addFormToContainer);
let elementsCreator = container.querySelector("form");

// create result and add it to container
let result = document.createElement("div");
result.className = "results";
container.appendChild(result);

// elementsCreator functions
elementsCreator.querySelector(`[name="create"]`).onclick = function (event) {
  let elementsCount = elementsCreator.querySelector(`[name="elements"]`).value;
  let textInput = elementsCreator.querySelector(`[name="texts"]`).value;
  let typeInput = elementsCreator.querySelector(`[name="type"]`).value;

  result.innerHTML = "";
  // add elements to the result
  for (i = 0; i < elementsCount; i++) {
    let element = document.createElement(typeInput);
    let eleText = document.createTextNode(textInput);
    element.className = "box";
    element.title = "Element";
    element.id = `id-${i + 1}`;
    element.appendChild(eleText);
    result.appendChild(element);
  }

  event.preventDefault();
  elementsCreator.querySelector(`[name="elements"]`).value = ``;
  elementsCreator.querySelector(`[name="texts"]`).value = ``;
};

console.log("=".repeat(25));
