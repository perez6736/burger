
$(function () {

    $("#submit").on("click", function(e){
        e.preventDefault();
        var newBurger = $("#newBurger").val().trim(); 

        var burgerObj = {
            burgerName: newBurger
        }

        if(newBurger === ""){
            //$("#error").show();
            //$("#error").html("Please enter a burger.");
            console.log("please enter a burger");

            //why does the page refresh here ?? 
        }
        else{
            $("#error").hide();

            $.ajax("/api/burgers", {
                type: "POST",
                data: burgerObj
            }).then(
                function(res){
                    console.log("new burger was added. ");
                    location.reload();
                }
            );
        } 
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

    });
});