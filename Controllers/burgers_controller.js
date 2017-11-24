// dependencies ===================================================== 

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes ==========================================================

// 
router.get("/", function(req, res){
    burger.all(function(data){
         var allObj = {
             burgers: data
         };
        console.log(allObj);
        res.render("index", allObj);
    });

});

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
        console.log(result);
    })
})

module.exports = router;