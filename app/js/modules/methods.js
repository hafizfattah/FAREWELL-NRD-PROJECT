// define(['jquery', 'moment', 'simpleWeather'], function($, moment){
// 	var methods = {};
// 	methods.getTime = function(arg){
// 		var date = moment().day();
// 		var month = moment().format('MMMM');
// 		var year = moment().format('YYYY');

// 		$('#time').append('<h2>'+ date +' '+ month +' '+ year + '</h2>');
// 		function getSecond(){
// 			var time = moment().format('LTS');
// 			$('#timenow').html(time);
// 		}
// 		//============  CLOCK TICKING!  ==========//
// 		setInterval(function(){
// 			getSecond();
// 		}, 1000)
// 	}

// 	methods.getTimeScale = function(arg){
// 		function getGreetingTime (hourtime) {
// 			var g = null; //return g
// 			var split_afternoon = 12 //24hr time to split the afternoon
// 			var split_evening = 17 //24hr time to split the evening
// 			var currentHour = parseFloat(moment().format("HH"));
			
// 			if(currentHour >= split_afternoon && currentHour <= split_evening) {
// 				g = "afternoon";
// 			} else if(currentHour >= split_evening) {
// 				g = "evening";
// 			} else {
// 				g = "morning";
// 			}
// 			return g;
// 		}
		
// 		var timeScale = getGreetingTime(); // pagi/siang/malem //
// 		$('#timescale').html(timeScale);
// 		return timeScale;
// 	}

// 	methods.getWeather = function(arg){
// 		navigator.geolocation.getCurrentPosition(function(position) {
// 			loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
// 		});
// 		function loadWeather(location, woeid, callback, handleData) {
// 			$.simpleWeather({
// 				location: location,
// 				woeid: woeid,
// 				unit: 'c',
// 				success: function(weather) {
// 					html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+ '<span>' +weather.units.temp+ '</span>' +'</h2>';
// 					html += '<h1>'+weather.city+'</h1>';

// 					$("#weather").html(html);
// 					// loadWeather(weather)
// 		            // getDataWeather(weather.currently);
// 		            handleData = weather.currently
// 		            console.log(handleData);
// 		            // getDataWeather();
// 		            return handleData;
// 		            balik();
// 				},
// 				error: function(error) {
// 			  		$("#weather").html('<p>'+error+'</p>');
// 				}
// 			});
// 			console.log('done');
// 		}

// 		function balik(){
// 			var newVal = loadWeather();
// 			return newVal;
// 		}
		
// 	}







// 	return methods;
// });