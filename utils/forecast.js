const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = "https://api.darksky.net/forecast/675deefcf6a6e9267bfffb9034447ff7/" + 
			latitude + ',' + longitude

	request({ url: url, json: true }, (error, response) =>{
		if (error){
			callback("There is no internet connection", undefined)
		} else if (response.body.error){
			callback("There is no such location", undefined)
		}else {
			callback(undefined, response.body.daily.data[0].summary +
				"It is currently " +
				response.body.currently.temperature +
				" degrees out there. There is a " +
				response.body.currently.precipProbability +
				"% chance of rain")
		}
	})
}

module.exports = forecast
