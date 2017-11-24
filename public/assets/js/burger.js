
$(function () {

    $("#submit").on("click", function(){
        var newBurger = $("#newBurger").val().trim(); 

        var burgerObj = {
            burgerName: newBurger
        }

        $.ajax("/api/create", {
            type: "POST",
            data: burgerObj
        }).then(
            function(){
                console.log("new burger was added. ");
                location.reload();
            }
        );
    });
        




});