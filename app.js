const request = require('request')

const url = 'https://api.darksky.net/forecast/675deefcf6a6e9267bfffb9034447ff7/37.8267,-122.4233?units=us&&lang=ja'

request({url: url, json: true}, (error, response) => {
	const degree = response.body.currently.temperature
	const rain = response.body.currently.precipProbability
	console.log(response.body.daily.data[0].summary + " It is currently " + degree + " degrees out there. There is a " + rain + "% chance of rain")

})