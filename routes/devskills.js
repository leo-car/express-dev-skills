var express = require('express');
var router = express.Router();

// Controllers that exports devskills CRUD functions
var devskillsCtrl = require("../controllers/devskills");


// Actual paths are starting with "/devskills"


// GET /devskills
router.get("/", devskillsCtrl.index); 

//
router.get("/:id", devskillsCtrl.show);

module.exports = router;
