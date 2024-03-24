// التكليف 01

let fontFamily = document.getElementById("fontFamily");
let fontColor = document.getElementById("fontColor");
let fontSize = document.getElementById("fontSize");
let options = document.querySelectorAll("select option");
let result = document.querySelector(".result");

if (window.localStorage.getItem("fontName") || window.localStorage.getItem("fontColor") || window.localStorage.getItem("fontSize")) {
  result.style.color = window.localStorage.getItem("fontColor");
  result.style.fontFamily = window.localStorage.getItem("fontName");
  result.style.fontSize = window.localStorage.getItem("fontSize");
  // // remove selected from all options
  options.forEach((option) => {
    option.removeAttribute("selected");
  });
  // add selected to the current option
  document.querySelector(`[value="${window.localStorage.getItem("fontName")}"]`).setAttribute("selected", "selected");
  document.querySelector(`[value="${window.localStorage.getItem("fontColor")}"]`).setAttribute("selected", "selected");
  document.querySelector(`[value="${window.localStorage.getItem("fontSize")}"]`).setAttribute("selected", "selected");
}

// get font name
fontFamily.onchange = function () {
  window.localStorage.setItem("fontName", fontFamily.value);
  result.style.fontFamily = window.localStorage.getItem("fontName");
  document.querySelector(`[value="${window.localStorage.getItem("fontName")}"]`).setAttribute("selected", "selected");
};
// get font color
fontColor.onchange = function () {
  window.localStorage.setItem("fontColor", fontColor.value);
  result.style.color = window.localStorage.getItem("fontColor");
  document.querySelector(`[value="${window.localStorage.getItem("fontColor")}"]`).setAttribute("selected", "selected");
};
// get font size
fontSize.onchange = function () {
  window.localStorage.setItem("fontSize", fontSize.value);
  result.style.fontSize = window.localStorage.getItem("fontSize");
  document.querySelector(`[value="${window.localStorage.getItem("fontSize")}"]`).setAttribute("selected", "selected");
};

// التكليف 02
