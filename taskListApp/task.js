//adding the given task and store them in localStorage
window.onload = onLoadEvent;

function onLoadEvent() {

    let addBtn = document.getElementById("addBtn");
    let clearBTn = document.getElementById("clearBtn");
    let mainTask = document.getElementById("textField");
    let task = document.getElementById("task");

    mainTask.textContent += localStorage.getItem(key);
    if (localStorage.getItem(key) === null) mainTask.textContent = "";

    //addBtn.onclick = 
    addBtn.onclick = function () {
        //document.getElementById("textField").innerHTML += mainTask;
        let oldTask = localStorage.getItem(key);
        if (oldTask === null) oldTask = "";
        //saving the user input
        localStorage.setItem(oldTask + task.value + "\n");
        mainTask.textContent = oldTask;
    }
    // clearBTn.onclick = 
    //clearing given task
    clearBTn.onclick = function () {
        localStorage.clear();
        document.getElementById("task").value = "";
        document.getElementById("textField").value = "";
    }
}

