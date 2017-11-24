
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


    $(".devour").on("click", function(){
        // id of the cat which i made the data attr 
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("the burger was upadterd");
                location.reload();
            }
        );

    })
        




});