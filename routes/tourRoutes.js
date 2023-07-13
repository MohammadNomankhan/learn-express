const express = require("express");
const tourControllers = require("../controllers/tourControllers");

const router = express.Router();

router.param("id", tourControllers.checkTourExist);

router
	.route("/")
	.get(tourControllers.getAllTours)
	.post(tourControllers.checkBody, tourControllers.addTour);
router
	.route("/:id")
	.get(tourControllers.getTour)
	.patch(tourControllers.updateTour)
	.delete(tourControllers.deleteTour);

module.exports = router;
