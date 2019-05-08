const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const place = process.argv[2];
if (!place) {
	console.log("Please provide an address!");
} else {
	geocode(place, (error, data) => {
		if (error) {
			return console.log("Error", error);
		}

		forecast(data.latitude, data.longitude, (error1, data1) => {
			if (error) {
				return console.log("Error", error);
			}
			console.log(data.location);
			console.log(data1);
		});
	});
}
