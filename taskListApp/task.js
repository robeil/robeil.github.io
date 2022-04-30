// var addTask = document.getElementById("#task").value;
// var taskList = document.getElementById("#textField");
// var clearTask = document.getElementsByClassName(".clearBtn");

//adding the given task and store them in localStorage
function addingTask() {
    //getting the data from the input
    var taskKey = document.getElementById("task").value;
    var mainTask = document.getElementById("textField").value;
    //saving the user input
    localStorage.setItem(taskKey, mainTask);
    
    //clearing the test field after that
    document.getElementById("task").value = "Task name";
    document.getElementById("textField").value = " Write down you tasks HERE!";
}
//clearing given task
function clearTask() {
    localStorage.clear();
    document.getElementById("task").value = "Task name";
    document.getElementById("textField").value = " Write down you tasks HERE!";
}