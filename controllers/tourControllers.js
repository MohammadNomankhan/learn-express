const fs = require("fs");

// to read file sync when server starts.
const tours = JSON.parse(
	fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// util functions
exports.checkTourExist = (req, res, next, val) => {
	const reqTour = tours.find((tour) => tour.id === +val);
	if (!reqTour)
		return res.status(404).json({ status: "fail", message: "Invalid ID" });
	next();
};

// how to make a get req
exports.getAllTours = (req, res) => {
	res.status(200).json({
		status: "success",
		results: tours.length,
		data: {
			tours,
		},
	});
};
exports.getTour = (req, res) => {
	const reqTour = tours.find((tour) => tour.id === +req.params.id);
	res.status(200).json({
		status: "success",
		data: {
			tour: reqTour,
		},
	});
};

exports.updateTour = (req, res) => {
	// we need to do something with data, we can use map.
	const reqTourId = +req.params.id;
	const newTours = tours.map((tour) => {
		if (tour.id === reqTourId) {
			return req.body;
		}
		return tour;
	});
	fs.writeFile(
		`${__dirname}/dev-data/data/tours-simple.json`,
		JSON.stringify(newTours),
		(err) => {
			res.status(200).json({ status: "success" });
		}
	);
};

exports.checkBody = (req, res, next) => {
	const { name, price } = req.body;
	if (!name || !price) {
		return res
			.status(400)
			.json({ status: "fail", message: "Name or price not sent" });
	}
	next();
};

exports.addTour = (req, res) => {
	// we need access to body which was send, hence used middleware for this app.use(express.json())
	const newId = tours[tours.length - 1].id + 1;
	const newTour = Object.assign({ id: newId }, req.body);

	tours.push(newTour);
	fs.writeFile(
		`${__dirname}/dev-data/data/tours-simple.json`,
		JSON.stringify(tours),
		(err) => {
			res.status(201).json({
				status: "success",
				data: {
					tour: newTour,
				},
			});
		}
	);
};

exports.deleteTour = (req, res) => {
	const tourToDelete = +req.params.id;
	const updatedTours = tours.filter((tour) => tour.id !== tourToDelete);
	fs.writeFile(
		`${__dirname}/dev-data/data/tours-simple.json`,
		JSON.stringify(updatedTours),
		(err) => {
			res.status(204).json({
				status: "success",
				data: null,
			});
		}
	);
};
