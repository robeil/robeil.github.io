"use strict";

var url = "./animation.js";

$.getScript(url, () => {

  $(document).ready( () => {

    let selectedAnimation = "BLANK";
    let selectedSize;
    let turboSpeed = 250;

    let stop = 0;

    //adjusting the default value 
    // $("#sizeSelection").change(() => {
    //   selectedSize = $(this).children("Option:selected").val();
    // });
    // $("#turbo").change(() => {
    //   turboSpeed = $(this).children("Option:selected").val();
    // });

    //start button
    $("#start").click(() => {

      animationStarted();
      //disabling the buttons during animation
      $("start").prop("disabled", true);
      $("#sizeSelection").prop("disabled", true);
      $("#animationList").prop("disabled", true);
      $("#turbo").prop("disabled", true);
      $("textarea").prop("disabled", true);

    });

    //stop button
    $("#stop").click(function () {
      clearInterval(stop)
      $("#start").prop("disabled", false);
      $("#animationList").prop("disabled", false);
      $("#sizeSelection").prop("disabled", false);
      $("#turbo").prop("disabled", false);
      //$("textarea").prop("disabled", false);
    });

    let animationStarted = () => {
      let index;
      selectedAnimation = document.getElementById("animationList").value;
      //splitting the array to get individual figure
      let tempArray = ANIMATIONS[selectedAnimation].split("=====");
      console.log(tempArray.length);

      stop = setInterval(loopingText, turboSpeed);

      $("start").prop("disabled", true);
      $("#stop").prop("disabled", false);
      $("#animationList").prop("disabled", true);

      function loopingText() {

        if (index < (tempArray.length - 1)) {
          index = index +1;
        } else if (index === ((tempArray.length - 1))) {
          index = 0;
        }
        //$("#textField").value(tempArray[index]); /// ??????
        document.getElementById("textarea").value = tempArray[index];
      }
    }

  })
})
