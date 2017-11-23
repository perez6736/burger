// dependencies ===================================================== 

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes ==========================================================

//HTML ============

router.get("/", function(req, res){
    burger.all(function(data){
         var allObj = {
             burgers: "testing initial route"
         };
        console.log(data);
        res.render("index", {burgers: "testing"});
    });

});

module.exports = router;