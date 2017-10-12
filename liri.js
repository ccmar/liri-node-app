var keys = require("./keys.js")
var Twitter = require("twitter")
var Spotify = require("node-spotify-api")
var request = require("request")
var fs = require("fs")
var command = process.argv[2];
var search = process.argv[3];



if (command === "my-tweets") {
	var client = new Twitter({
	  consumer_key: keys.twitterKeys.consumer_key,
	  consumer_secret: keys.twitterKeys.consumer_secret,
	  access_token_key: keys.twitterKeys.access_token_key,
	  access_token_secret: keys.twitterKeys.access_token_secret
	});

	client.get('statuses/user_timeline', {"count": 20}, function(error, tweets, response) {
  		if (!error) {
  			for(var i = 0; i < tweets.length; i++){
  				console.log(tweets[i].text);
  			}
    	
  		} else {
  			console.log(error);
  		}
	});
}else if (command === "spotify-this-song") {
		//do spotify stuff
};

