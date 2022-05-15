
$(document).ready(function () {
    ///using pure promise syntax
    $("#view_button").click(() => {

        let date = $("#date").val();
        //sending request here
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=Bdzl1U2O1v2kvtYRWGGeohUaulxpN6QwbiEwi3Ch`)
            //getting the promise here    
            .then(response => response.json())
            //getting and using the response here
            .then(data => {
                $("#pic").attr("src", data.url);
                $("#title").text(data.title);
                $("#dateP").text(data.date);
                $("#explain").text(data.explanation);
            })
            //handling error here if any occur
            .catch(err => console.log(err.message))


        //using wait and sync
      /**   async function usingAsyncAwait() {
            //making the request 
            const resp = await fetch('https://api.nasa.gov/planetary/apod?date=${date}&api_key=Bdzl1U2O1v2kvtYRWGGeohUaulxpN6QwbiEwi3Ch');
            //getting the data back  and store
            const data = await resp.json();
            //using the received data for our page
            $("#pic").attr("src", data.url);
            $("#title").text(data.title);
        }
        //calling the function

        usingAsyncAwait();
        */
    })

})