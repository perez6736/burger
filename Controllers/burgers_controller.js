// dependencies ===================================================== 

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes ==========================================================

//HTML ============

router.get("/", function(req, res){
    burger.all(function(data){
         var allObj = {
             burgers: data
         };
        console.log(data);
        res.render("index", allObj);
    });

});

router.post("/api/create", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],
    [
        req.body.burgerName, 0
    ], function(result){
    res.json({id: result.insertId});
    });
});

module.exports = router;