// dependencies =====================6================================ 

var orm = require("../config/orm.js"); 

// orm functions that return relevant data. 

var burger = {
    // all: get all burgers 
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    // create: // create a burger
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    // update: // update existing burger
    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger;