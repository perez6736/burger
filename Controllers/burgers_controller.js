// dependencies ===================================================== 

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes ==========================================================

// this will happen on page load and put the burgers to the handlebar page. 
router.get("/", function(req, res){
    burger.all(function(data){
         var allObj = {
             burgers: data
         };
        console.log(allObj);
        res.render("index", allObj);
    });

});

// this will happen when the user creates a burger. 
router.post("/api/burgers", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],
    [
        req.body.burgerName, false
    ], function(result){
    res.json({id: result.insertId});
    });
});

// this will happen when the user devours the burger. 
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured   
    },condition, function(result) {

        // I needed to send back a response inorder for the callback on client side to run

        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;