
$(function () {

    $("#submit").on("click", function(){
        var newBurger = $("#newBurger").val().trim(); 

        var burgerObj = {
            burgerName: newBurger
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerObj
        }).then(
            function(res){
                console.log("new burger was added. ");
                location.reload();
            }
        );
    });
        




});