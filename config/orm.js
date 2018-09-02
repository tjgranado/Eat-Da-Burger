const connection = require("./connection.js");

var orm = {
    selectAll : function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    

    insertOne: function(tableInput, burger_name, cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (burger_name) VALUES ";
        queryString += "('" + burger_name + "'" + ")" + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },

    updateOne: function(tableInput, condition, cb){
        var queryString = "UPDATE " + tableInput;
        queryString += " SET devoured = 1" ;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;