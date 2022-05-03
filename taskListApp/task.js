//adding the given task and store them in localStorage
window.onload = onLoadEvent;

function onLoadEvent() {

    var addBtn = document.getElementById("addBtn");
    var clearBTn = document.getElementById("clearBtn");

    addBtn.onclick = function addingTask() {
        //getting the data from the input
        var taskKey = document.getElementById("task").value;
        var mainTask = document.getElementById("textField");
        //document.getElementById("textField").innerHTML += mainTask;
        //saving the user input
        localStorage.setItem(taskKey, taskKey);
        let storedKey = localStorage.getItem(taskKey);
        console.log(taskKey);

        document.getElementById("textField").value += storedKey + "\n";
        mainTask.textContent = localStorage.getItem(taskKey);
        // document.getElementById("task").value = "";
    }
    //clearing given task
    clearBTn.onclick = function clearTask() {
        localStorage.clear();
        document.getElementById("task").value = "";
        document.getElementById("textField").value = "";
    }
}