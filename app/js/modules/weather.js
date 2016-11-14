define('weather',['video'], function(video){
	
	console.log("weather");
	var methods = {};
	
	// methods.getWeather = function(){
	// 	function getCityWeather() {
	// 	    console.log(city);
	// 	    $('.weather-temperature').openWeather({
	// 			key: 'c9d49310f8023ee2617a7634de23c2aa',
	// 			city: city,
	// 			placeTarget: '.weather-place',
	// 			iconTarget: '.weather-icon',
	// 			customIcons: '../img/icons/weather/',
	// 			descriptionTarget: '.weather-description',
	// 			success: function() {
	// 				$('.weather-wrapper').show();
	// 				var stat = $('.weather-description').text();
	// 				weatherStatus = stat;
	// 			},
	// 		})
	// 	}   
	// }
	var city;
	var weatherStatus

	methods.getLocation = function() {
		$.get("http://ipinfo.io", function (response) {
		    city = response.region;
		    methods.getCityWeather();                
		}, "jsonp");
	}
	
	methods.getCityWeather = function() {
	    console.log(city);
	    $('.weather-temperature').openWeather({
			key: 'c9d49310f8023ee2617a7634de23c2aa',
			city: city,
			placeTarget: '.weather-place',
			iconTarget: '.weather-icon',
			customIcons: '../img/icons/weather/',
			descriptionTarget: '.weather-description',
			success: function(callback) {
				$('.weather-wrapper').show();
				var stat = $('.weather-description').text();
				weatherStatus = stat;
				console.log(stat);
				methods.wet();
			},
		});
	}   

	methods.wet = function(cuaca) {
		cuaca = weatherStatus;
		weatherStatus = $('.weather-description').text();
		switch (weatherStatus) {
		   case 'scattered clouds': $('#video1').attr('src', '../video/berawan.webm');
		   break;
		   
		   case 'broken clouds': $('#video1').attr('src', '../video/berawan.webm');
		   break;
		   
		   case 'few clouds': $('#video1').attr('src', '../video/berawan.webm');
		   break;

		   case 'clear sky': console.log("betul 'clear sky'")
		   break;

		   case 'shower rain': console.log("betul 'shower rain'")
		   break;

		   case 'rain': console.log("betul 'rain'")
		   break;

		   case 'thunderstorm': console.log("betul 'thunderstorm'")
		   break;

		   case 'snow': console.log("betul 'snow'")
		   break;
		   
		   default: console.log("default")
		}
		video.playVids();
	}

	
	
	
	return methods
	
})


