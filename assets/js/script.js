var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (){

    //This prevents the browser from constantly refreshing
    event.preventDefault();

    var listItemEl = document.createElement("li")
    listItemEl.className ="task-item";
    listItemEl.textContent ="This is a new task.";
    tasksToDoEl.appendChild(listItemEl);

}

//waits for the form to be submitted by using the button and then creating the task
formEl.addEventListener("submit", createTaskHandler);



