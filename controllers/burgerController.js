var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");



// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    
    res.render("index", hbsObject);
  });
});
//////////////////////////////////////////////////////////////////////////
// This will POST the burgers to the db
router.post("/api/burger", (req, res) => { 
    console.log(req.body);
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
   
    res.json({ id: result.insertId });
    
  });
});
/////////////////////////////////////////////////////////////////////////
router.put("/api/devoured/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    
    condition,
    (result) => {
      if (result.changedRows === 0) {
        
        return res.status(404).end();
      }else{
      res.status(200).end();
      }
    }
  );
  console.log("updated")
});


// Export routes for server.js to use.
module.exports = router;