var body = document.body;
var textArea = document.getElementById("textArea").value;
var btn = document.getElementById("btn");
var check = document.getElementById("bling");

// //after loading the page
// window.onload = function () {
//     btn.onclick = interval;
//     check.onchange = makeItBigger;
// }
// function interval(){
//     var id = setInterval(makeItBigger, 1000);
//     setTimeout(clearInterval, 5000, id);
// }

// //button that make the text bigger
// function makeItBigger() {
//     style = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     textArea.style.fontSize = (currentSize + 2) + 'px';

//     //if the checkbox clicked
//     if (check.checked) {
//         textArea.style.fontWeight = "bold";
//         textArea.style.color = "green";
//         textArea.style.textDecoration = "underline";
//         body.style.backgroundImage = 'url("./decoratedimg.jpeg)';
//     } else {
//         textArea.style.fontWeight = "normal";
//         textArea.style.color = "black";
//         textArea.style.textDecoration = "none";
//         body.style.backgroundColor = "white";
//     }
// }
// //function that convert to marov
// function markov() {
//     var words = textArea.ariaValueMax;
//     var array = words.split(/\s+/);
//     var result = "";
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].length >= 5) {
//             arr[i] = "Markovich";
//         }
//         result += array[i] + " ";
//     }
//     textArea.value = result;
// }
// //timer
// setTimeout(makeItBigger, 5000);
// //bling function to apply the css style
// function applyCss() {
//     if (check.checked) {
//         textArea.style.fontWeight = "bold";
//         textArea.style.color = "green";
//         textArea.style.textDecoration = "underline";
//         body.style.backgroundImage = "url('./Obverse_of_the_series_2009_$100_Federal_Reserve_Note.jpeg')";

//         console.log("checked executed");
//     } else {
//         textArea.style.fontWeight = "normal";
//         textArea.style.color = "black";
//         textArea.style.textDecoration = "none";
//         body.style.backgroundImage = "url('')";
//         console.log("unchecked executed");
//     }

// }

// //timer that will add the size every time
// function timer500ms() {

//     var id = setInterval(makeItBigger, 1000);
//     setTimeout(clearInterval, 5000, id);
//     console.log("timer reclicked");


// }
//-----------------------------------------

// window.onload = function () {
//     var btn1= document.getElementById("btn1");
//     btn1.onclick= interval;
  
//     var check1= document.getElementById("check1");
  
//     check1.onchange=changeFont();
  
//   }
  
  function increaseFontSize(){
    let txt = document.getElementById("textArea");
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 2) + 'px';
  }
  
  function interval() {
    var id = setInterval(increaseFontSize, 1000);
    setTimeout(clearInterval, 5000, id);
  }
  
  function changeFont() {
    // if(document.getElementById("check1").checked){
    //   document.getElementById("textArea").style.fontWeight="bold";
    //   document.getElementById("textArea").style.color="green";
    //   document.getElementById("textArea").style.textDecoration="underline";
    //   document.body.style.backgroundImage='url("./decoratedimg.jpeg")';
    // }
    // else{
    //   document.getElementById("textArea").style.fontWeight="normal";
    //   document.getElementById("textArea").style.color="black";
    //   document.getElementById("textArea").style.textDecoration="none";
    //   document.body.style.backgroundColor= "white";
  
    // }
    if (check.checked) {
              textArea.style.fontWeight = "bold";
              textArea.style.color = "green";
              textArea.style.textDecoration = "underline";
              body.style.backgroundImage = "url('./Obverse_of_the_series_2009_$100_Federal_Reserve_Note.jpeg')";
          } else {
              textArea.style.fontWeight = "normal";
              textArea.style.color = "black";
              textArea.style.textDecoration = "none";
              body.style.backgroundColor = "white";
          }
  
  }
  
  
  
  function pig() {
    var words = document.getElementById("textArea").value;
    var splittedword = words.split(/\s+/);
    var result = "";
    for (var i = 0; i < splittedword.length; i++) {
      var word = splittedword[i];
      result +=  toPig(word) + " ";
  
    }
    document.getElementById("textArea").value = result;
  }
  
  
  function toPig(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
  
    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "ay";
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
  
    }
    return newStr;
  
  
  }
  
  function markov() {
    var words = document.getElementById("textArea").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("textArea").value = result;
  }
  
  
