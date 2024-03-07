// Assignment #2
console.log("=".repeat(1), "[Assignment #2]", "=".repeat(7));

let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector(`[title="Current"]`);
let cls = document.querySelector(".classes-list div");

function addRem() {
  // remove all element
  document.querySelectorAll("span").forEach((el) => el.remove());
  // add or remove classes
  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (add.value) {
      current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
    }
    if (remove.value) {
      current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
  }
  this.value = "";
  // add or remove spans
  if (current.classList.length) {
    [...current.classList].sort().forEach((el) => {
      let span = document.createElement("span");
      span.textContent = el;
      cls.append(span);
    });
  } else cls.textContent = "No Classes To Show";
}

add.onblur = addRem;
remove.onblur = addRem;

console.log("=".repeat(25));
