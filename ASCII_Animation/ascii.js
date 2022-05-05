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

      //getting the selected animation
      $("#animationList").change(function () {

        selectedAnimation = $(this).children("Option:selected").val();

        if (selectedAnimation === "EXERCISE") {
          $("textarea").text(ANIMATIONS_LIST[2]);
        } else if (selectedAnimation === "JUGGLER") {
          $("textarea").append(ANIMATIONS_LIST[3]);
        } else if (selectedAnimation === "BIKE") {
          $("textarea").append(ANIMATIONS_LIST[4]);
        } else if (selectedAnimation === "DIVE") {
          $("textarea").append(ANIMATIONS_LIST[5]);
        }
        
      });

      //getting the selected size
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
        console.log("is it checked ? " + typeof isItChecked);
      });

      let position = 0;
      let i;
      console.log("data outside for loop " + position);
      let tempArray = [BLANK, CUSTOM, EXERCISE, JUGGLER, BIKE, DIVE];

      /**switch (selectedAnimation) {
        case BLANK:
          $("textarea").text(ANIMATIONS_LIST[0]);
          break;
        case CUSTOM:
          $("textarea").text(ANIMATIONS_LIST[1]);
          break;
        case EXERCISE:
          $("textarea").text(ANIMATIONS_LIST[2]);
          break;
        case JUGGLER:
          $("textarea").text(ANIMATIONS_LIST[3]);
          break;
        case BIKE:
          $("textarea").text(ANIMATIONS_LIST[4]);
          break;
        case DIVE:
          $("textarea").text(ANIMATIONS_LIST[5]);
          break;
        default:
          $("textarea").text("PLEASE CHOOSE ANY ANIMATION YOU LIKE FIRST!");
          */
      /**   .css({ "color": "black", "font-size": "30px" });
      $("textarea").animate({
        fontSize: '100px',
      }).css("color", "blue");
  }
    }*/



      // let tempArray = [BLANK, CUSTOM, EXERCISE, JUGGLER, BIKE, DIVE];

      // for (let i = 0; i < ANIMATIONS_LIST.length; i++) {
      //   if (selectedAnimation === tempArray[i]) {
      //     $("textarea").text(ANIMATIONS_LIST[i]);
      //   }


      //if the choice seems to be default display the default text
      // if (selectedAnimation === BLANK) {
      //   $("textarea").text("PLEASE CHOOSE ANY ANIMATION YOU LIKE FIRST!")
      //     .css({ "color": "black", "font-size": "30px" });
      //   $("textarea").animate({
      //     fontSize: '100px',
      //   }).css("color", "blue");
      // } 
      //disabling the buttons during animation
      $("start").prop("disabled", true);
      $("#sizeSelection").prop("disabled", true);
      $("#animationList").prop("disabled", true);
      $("#turbo").prop("disabled", true);
      $("textarea").prop("disabled", true);

    });

    //stop button
    $("#stop").click(function () {

      $("#start").prop("disabled", false);
      $("#animationList").prop("disabled", false);
      $("#sizeSelection").prop("disabled", false);
      $("#turbo").prop("disabled", false);
      //$("textarea").prop("disabled", false);
    })

    //animations 



  })
})
