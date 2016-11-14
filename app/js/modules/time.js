define('time', ['moment'], function(moment){
	console.log("time");
	var methods = {}


	methods.getTime = function(){
		var date = moment().format('D');
		var month = moment().format('MMMM');
		var year = moment().format('YYYY');

		$('#time').append(date +' <span id="month">'+ month +'</span> '+ year );
	}	
	
	methods.getGreetingTime = function(hourtime){
		var dayScale = null; //return g
		var split_afternoon = 12 //24hr time to split the afternoon
		var split_evening = 17 //24hr time to split the evening
		var currentHour = parseFloat(moment().format("HH"));
		
		if(currentHour >= split_afternoon && currentHour <= split_evening) {
			dayScale = "siang";
		} else if(currentHour >= split_evening) {
			dayScale = "malam";
		} else {
			dayScale = "pagi";
		}

		$('#dayScale').append(dayScale)
	}

	methods.getSecond = function(){
		var time = moment().format('H mm ss');
		$('#clock').html(time);
	}


	
	return methods;

});