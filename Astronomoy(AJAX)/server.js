//loading page
$(document).ready(() => {
    $("#view_button").click(getPicture);
});
//connection
function getPicture() {
    let date = $("#date").val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${date}`,
        type: "GET",
        data: {
            api_key: "Bdzl1U2O1v2kvtYRWGGeohUaulxpN6QwbiEwi3Ch"
            // date: $("date").val()
        },
        dataType: "json",
        "success": displayPicture,
        "error": failedDisplay
    });
};
//displaying picture from the API
function displayPicture(data) {
    $("#pic").attr("src", data.url);
    $("#title").text(data.title);
    $("#explain").text(data.explanation);
};
//error handler
function failedDisplay(error) {
    alert(error.responseText);
};
