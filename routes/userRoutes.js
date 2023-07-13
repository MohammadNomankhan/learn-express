const express = require("express");
const router = express.Router();
const fs = require("fs");
const userControllers = require("../controllers/userControllers");

//////////////////// routes
// how to access url params -> req.params.id or anything except id

router
	.route("/")
	.get(userControllers.getAllUsers)
	.post(userControllers.addUser);
router
	.route("/:id")
	.get(userControllers.getUser)
	.patch(userControllers.updateUser)
	.delete(userControllers.deleteUser);

module.exports = router;
