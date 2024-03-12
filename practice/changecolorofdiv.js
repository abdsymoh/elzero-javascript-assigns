let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".div");



if (window.localStorage.getItem("color")) {
  // [1] add color to div
  div.style.backgroundColor = window.localStorage.getItem("color");

  // [2] Remove Active class from all lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active class to current ele
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Add Active class to current ele
    e.currentTarget.classList.add("active");
    // add current color to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // change div background color
    div.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
