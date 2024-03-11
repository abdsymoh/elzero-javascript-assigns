// Assignment #1

// let userInput = window.prompt("Print Number From – To", "Example: 5-20").split("-").sort();
// for (let i = Number(userInput[0]); i <= userInput[1]; i++) {
//   console.log(i);
// }

// Assignment #2

// let sweetPopup = document.createElement("div");
// sweetPopup.className = "sweetPopup";
// sweetPopup.innerHTML = `
// <h2 class="title">Welcome</h2>
// <p class="text">Welcome To Elzero Web School</p>
// <button id="closeBtn" class="closeBtn">x</button>
// `;
// sweetPopup.style.cssText = `
//   display: none;
//   `;
// sweetPopup.querySelector(".title").style.cssText = `
//   margin-bottom: -5px;
//   `;
// sweetPopup.querySelector(".closeBtn").style.cssText = `
//   width: 26px;
//   height: 26px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   border: none;
//   background-color: crimson;
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
//   padding-bottom: 5px;
//   position: absolute;
//   top: -13px;
//   right: -13px;
//   cursor: pointer;
//   `;
// document.body.prepend(sweetPopup);

// window.setTimeout(function () {
//   sweetPopup.style.cssText = `
//     width: 500px;
//     height: 150px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-flow: column;
//     background-color: #eee;
//     border: 1px solid #ddd;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);
//     font-family: sans;
//   `;
// }, 5000);

// document.getElementById("closeBtn").addEventListener("click", function () {
//   sweetPopup.remove();
// });

// Assignment #3 & Assignment #4 & Assignment #5

// let div = document.createElement("div");
// div.innerText = "10";
// document.body.prepend(div);

// function countDown() {
//   div.innerText -= 1;
//   if (div.innerText === "5") {
//     window.open("https://elzero.org", "_blank", "popup; width=400; height=400; top=200; left=100");
//   }
//   if (div.innerText === "0") {
//     clearInterval(counter);
//   }
// }

// let counter = setInterval(countDown, 1000);
