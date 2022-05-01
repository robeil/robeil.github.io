//creating variables

var startBtn = document.getElementById("start-tn");
var goBack = document.getElementById("go-back");
var questionContainer = document.getElementById("question-container");
var submitBtn = document.getElementById("submit");

document.getElementById("question1").style.visibility = "hidden";
document.getElementById("question2").style.visibility = "hidden";
document.getElementById("question3").style.visibility = "hidden";
document.getElementById("question4").style.visibility = "hidden";
document.getElementById("thanks").style.visibility = "hidden";

//starting the quiz
function startQuiz() {
    document.getElementById("thanks").style.visibility = "hidden";
    document.getElementById("question1").style.visibility = "visible";
    document.getElementById("question2").style.visibility = "visible";
    document.getElementById("question3").style.visibility = "visible";
    document.getElementById("question4").style.visibility = "visible";
    console.log("starting the quiz")
}

//going back to the previous question
function goingBack(){
    console.log("going back");
}
//finish the quiz
function finishQuiz(){
    document.getElementById("thanks").style.visibility = "visible";
    document.getElementById("question1").style.visibility = "hidden";
    document.getElementById("question2").style.visibility = "hidden";
    document.getElementById("question3").style.visibility = "hidden";
    document.getElementById("question4").style.visibility = "hidden";
}
