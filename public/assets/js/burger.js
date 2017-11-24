console.log($("#sumbit"));

$("#sumbit").on("click", function(){

    // grab the value from the input and put it in an object. 
    var newBurger = $("#newBurger").val().trim(); 

    var newBurgerObj = {
        burger: newBurger
    }

    console.log(newBurgerObj);


    // Send the POST request.
    $.ajax("/api/create", {
        type: "POST",
        data: newBurgerObj
        }).then(
        function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
})