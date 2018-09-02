const orm = require("../config/orm.js");

var burgers = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    // allDevoured: function(cb){
    //     orm.selectAllDevoured("burgers", function(res){
    //         cb(res);
    //     });
    // },

    create: function(burger_name, cb){
        orm.insertOne("burgers", burger_name, function(res){
            cb(res);
        });
    },

    update: function(condition, cb){
        orm.updateOne("burgers", condition, function(res){
            cb(res);
        })
    }
}

module.exports = burgers;