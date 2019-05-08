const request = require('request')

const url = 'https://api.darksky.net/forecast/675deefcf6a6e9267bfffb9034447ff7/37.8267,-122.4233?units=us'

request({url: url, json: true}, (error, response) => {
	const degree = response.body.currently.temperature
	const rain = response.body.currently.precipProbability
	console.log(response.body.daily.data[0].summary + "It is currently " + degree + " degrees out there. There is a " + rain + "% chance of rain")

})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW1sZWFybmluZyIsImEiOiJjanZlcnB4dWwwNTI4NDRxbGN6NTZpMTl2In0.EZjw6jhQdm0CDjxNrGTFkA&&linit=1'

request({url: geocodeURL, json: true}, (error, response) => {
	const longitude = response.body.features[0].center[0]
	const latitude = response.body.features[0].center[1]
	console.log('latitude: ' + latitude)
	console.log('longitude: ' + longitude)

})