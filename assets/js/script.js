var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {

  //This prevents the browser from constantly refreshing
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  
  //resets the form
  formEl.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  //packaged the data as an obj to be caleed in the createTaskEl()
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  //send obj as argument to createTaskEl
  createTaskEl(taskDataObj);
};

//This will hold the code to creat the new task HTML element
//This also sets an obj(taskDataObj) as the argument as we can call on the obj properties  
var createTaskEl = function(taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  //give it a class name
  taskInfoEl.className = "task-info";
  //add HTML content to the div
  //also gets the info of the obj as well
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  console.dir(listItemEl);

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);



