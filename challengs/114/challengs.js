console.log("Elzero JavaScript Ep. 114 Challenge");
console.log("==========");

let input = document.querySelector(".input");
let addTaskBtn = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let arrayOfTasks = [];

if (window.localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

getTasksFromLocalStorage();

addTaskBtn.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

// click on task element
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    deleteTaskWith(e.target.parentElement.id);
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("task")) {
    taskToggleStatusWith(e.target.id);
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  arrayOfTasks.push(task);
  console.log(arrayOfTasks);
  addElementsToPageFrom(arrayOfTasks);
  addTasksToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  tasksDiv.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    let span = document.createElement("span");
    span.className = "task";
    if (task.completed) {
      span.className = "task done";
    }
    span.id = task.id;
    span.appendChild(document.createTextNode(task.title));
    let delBtn = document.createElement("button");
    delBtn.className = "del";
    delBtn.appendChild(document.createTextNode("Delete"));
    span.appendChild(delBtn);
    tasksDiv.appendChild(span);
  });
}

function addTasksToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}
function getTasksFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addTasksToLocalStorageFrom(arrayOfTasks);
}

function taskToggleStatusWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addTasksToLocalStorageFrom(arrayOfTasks);
}
