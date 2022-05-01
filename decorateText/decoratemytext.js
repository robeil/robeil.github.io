var body = document.body;
var box = document.getElementById("box");
var box1 = document.getElementById("tableForm");
var textArea = document.getElementById("textArea");
var textArea1 = document.getElementById("textSet");
var textArea2 = document.getElementById("textSet1");
var btn = document.getElementById("btn");
var check = document.getElementById("bling");
// textArea.style.fontSize = "12pt";

//after loading the page
// window.onload = function() {
//     btn.onclick= timer500ms;
//     var check1= document.getElementById("check1");
//     check1.onchange= makeItBigger();
  
//   }
//button that make the text bigger
function makeItBigger() {
    var fontValue = document.getElementById("textArea");
    var style = window.getComputedStyle(fontValue, null).getPropertyValue('font-size');
    var currentSize = parseFloat(style);
    fontValue.style.fontSize = (currentSize + 2) + 'px';
   
}
//bling function to apply the css style
function applyCss() {
    if (check.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green";
        textArea.style.textDecoration = "underline";
        body.style.backgroundImage = "url('./Obverse_of_the_series_2009_$100_Federal_Reserve_Note.jpeg')";
     
        console.log("checked executed");
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
        body.style.backgroundImage = "url('')";
        console.log("unchecked executed");
    }

}

//timer that will add the size every time
function timer500ms() {
    console.log("timer started");
    while(true){
    btn = setInterval(makeItBigger(), 500000);
    console.log("timer reclicked");
    }

}
