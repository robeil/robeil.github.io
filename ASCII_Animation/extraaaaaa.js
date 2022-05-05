"use strict";

var url = "./animation.js";


$.getScript(url, function () {

  //let ANIMATIONS_LIST = [BLANK, CUSTOM, EXERCISE, JUGGLER, BIKE, DIVE]
  $(document).ready(function () {

    let selectedAnimation;
    let selectedSize;
    let turboSpeed;
    //start button
    $("#start").click(function () {
      $("textarea").text(ANIMATIONS[2]);
    });
      //getting the selected animation
      $("#animationList").change(function () {
        
        
        //selectedAnimation = $(this).children("Option:selected").val();

        // if (selectedAnimation === "EXERCISE") {
        //   $("textarea").text(ANIMATIONS_LIST[2]);
        // } else if (selectedAnimation === "JUGGLER") {
        //   $("textarea").append(ANIMATIONS_LIST[3]);
        // } else if (selectedAnimation === "BIKE") {
        //   $("textarea").append(ANIMATIONS_LIST[4]);
        // } else if (selectedAnimation === "DIVE") {
        //   $("textarea").append(ANIMATIONS_LIST[5]);
        // }

      });

      // //getting the selected size
      $("#sizeSelection").change(function () {

        selectedSize = $(this).children("Option:selected").val();

        if (selectedSize == "Tiny") {
        } else if (selectedSize == "small") {
          selectedSize = 10;
        } else if (selectedSize == "Medium") {
          selectedSize == 12;
        } else if (selectedSize == "Large") {
          selectedSize == 16;
        } else if (selectedSize == "Extra-Large") {
          selectedSize == 32;
        }
      });

      //checking if the turbo is checked or not
      $("#turbo").change(function () {
        if (this.checked) {
          turboSpeed = 50;
        } else {
          turboSpeed = 250;
        }
      });

      //disabling the buttons during animation
      $("start").prop("disabled", true);
      $("#sizeSelection").prop("disabled", true);
      $("#animationList").prop("disabled", true);
      $("#turbo").prop("disabled", true);
      $("textarea").prop("disabled", true);

    

    //stop button
     let stopping = $("#stop").click(function () {

      $("#start").prop("disabled", false);
      $("#animationList").prop("disabled", false);
      $("#sizeSelection").prop("disabled", false);
      $("#turbo").prop("disabled", false);
      //$("textarea").prop("disabled", false);
    })


  })
})
