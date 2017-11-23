// dependencies ===================================================== 

var orm = require("../config/orm.js"); 

// orm functions that return relevant data. 

var burger = {

    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    }
    
    // create: // create a burger
    // update: // update existing burger
    // delete: // delete a burger. 

}