const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const place = process.argv[2];
if (!place) {
	console.log("Please provide an address!");
} else {
	geocode(place, (error, {latitude, longitude, location}) => {
		if (error) {
			return console.log("Error", error);
		}
	
		forecast(latitude, longitude, (error1, data1) => {
			if (error) {
				return console.log("Error", error);
			}
			console.log(location);
			console.log(data1);
		});
	});
}
