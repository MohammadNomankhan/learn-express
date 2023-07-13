// util functions
exports.checkTourExist = (req, res, next) => {
	const reqTour = tours.find((tour) => tour.id === +req.params.id);
	if (!reqTour)
		return res.status(404).json({ status: "fail", message: "Invalid ID" });
	next();
};
////////////////// route handlers

exports.getAllUsers = (req, res) => {
	res.status(500).json({
		status: "Error",
		message: "This route is still being implemented",
	});
};

exports.addUser = (req, res) => {
	res.status(500).json({
		status: "Error",
		message: "This route is still being implemented",
	});
};
exports.getUser = (req, res) => {
	res.status(500).json({
		status: "Error",
		message: "This route is still being implemented",
	});
};
exports.updateUser = (req, res) => {
	res.status(500).json({
		status: "Error",
		message: "This route is still being implemented",
	});
};
exports.deleteUser = (req, res) => {
	res.status(500).json({
		status: "Error",
		message: "This route is still being implemented",
	});
};
