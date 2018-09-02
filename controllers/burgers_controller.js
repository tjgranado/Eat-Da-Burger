const express = require("express");
const router = express.Router();

//import the model burger.js to use its database function

const burger = require("../models/burger.js");

//create all route for the app

router.get("/", function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

 
});

router.post("/", function(req, res) {
    burger.create(req.body.burger_name, function(){
        res.redirect("/");
    })

    
})

router.put("/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.update(condition, function(){
        res.redirect("/");
    });
})

module.exports = router;