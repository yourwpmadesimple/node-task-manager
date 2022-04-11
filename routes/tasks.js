const express = require("express");
const router = express.Router();

// Controllers
const { getAllTasks } = require("../controllers/tasks");

router.route("/").get(getAllTasks);

module.exports = router;
