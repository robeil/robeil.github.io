
var url = "./animation.js";

$.getScript(url, function () {

    $(document).ready(function () {
        //start button
         $("#start").click(function () {
             $("textarea").html(DIVE).slideUP("slow");
           // $("#start").hide("slow");
         });
     

    });

});
