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
		var spotify = new spotify({
			id: '172a15c9d463480e93a4b1b326ad6bfb',
			secret: 'eb7a1f829811434191e72f41cbc84405'
		})

		var spotifySong(function = songName){
			if (songName === undefined){
				songName = "The Sign";
			}
			spotify.search(
				{
					type: "track";
					query: songName
				} else{
					console.log(error);
				}
			)
		}
};

	var songs = data.tracks.items;

		for (var i = 0; i < songs.length; i++) {
        console.log(i);
				//console.log songs name, artist, preview song, and album
			}

	//getMovie

	var getMovie(function = movieName){
		if (movieName === undefined){
			movieName = "Mr Nobody";
		}
			var url = "http://www.omdbapi.com/?t=" + movieName + "http://www.omdbapi.com/?i=tt3896198&apikey=6f513c20";
			var jsonData = JSON.parse(body);
      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotton Tomatoes URL: " + jsonData.tomatoURL);
		}

		var pick = function(caseData, functionData) {
		  switch (caseData) {
		    case "my-tweets":
		      getMyTweets();
		      break;
		    case "spotify-this-song":
		      getMeSpotify(functionData);
		      break;
		    case "movie-this":
		      getMeMovie(functionData);
		      break;
		    case "do-what-it-says":
		      doWhatItSays();
		      break;
		    default:
		      console.log("LIRI doesn't know that");
		  }
		};
