//adding the given task and store them in localStorage
function addingTask() {
    //getting the data from the input
    var taskKey = document.getElementById("task").value;
    var mainTask = document.getElementById("textField").value;
    //document.getElementById("textField").innerHTML += mainTask;
    //saving the user input
    localStorage.setItem(taskKey, mainTask);

   
    document.getElementById("textField").value += document.getElementById("task").value + "\n";
    // document.getElementById("task").value = "";
}
//clearing given task
function clearTask() {
    localStorage.clear();
    document.getElementById("task").value = "";
    document.getElementById("textField").value = "";
}