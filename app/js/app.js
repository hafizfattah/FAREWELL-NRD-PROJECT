define('app', ['weather', 'time', 'video'], function(weather, time, video) {
	// define(['weather'], function ($) {
	//    	//Jquery Init Code here with no Ready Wrapper.
	// }
	video.appendVideos();
	
	weather.getLocation();
		

	time.getTime();
	time.getGreetingTime();

	setInterval(function(){
		time.getSecond();
	}, 1000);

	

	
	// weather.openWeather();

	// $('#button').click(function(event) {
	//     playVids();
	// 	$('#scene_1').show();
	// 	scene_1.play();

	// });
	
	// var scene_1 = new TimelineMax({paused: true});
	// scene_1.add([
	// 	TweenLite.set($('#scene_1'), {
	// 		display: "block"
	// 	}),
	// 	TweenLite.to($('#greating'), 0.8, {
	// 		delay: 1,
	// 		opacity: 1,
	// 		ease: Expo.easeIn
	// 	}),
	// 	TweenLite.fromTo($('#city'), 1, {
	// 		opacity: 0,
	// 		y: 50,
	// 	},{
	// 		delay: 1.8,
	// 		y: 0,
	// 		opacity: 1,
	// 	}),
	// 	TweenLite.set($('#scene_1'), {
	// 		delay: 5,
	// 		display: "none"
	// 	}),
	// 	TweenLite.set($('#scene_2'), {
	// 		delay: 5,
	// 		display: "block"
	// 	}),
	// 	TweenLite.to($('#weather'), 0.8, {
	// 		delay: 5.2,
	// 		opacity: 1
	// 	}),
	// 	TweenLite.to($('#time'), 0.8, {
	// 		delay: 5.6,
	// 		opacity: 1
	// 	}),
	// 	TweenLite.set($('#scene_2'), {
	// 		delay: 9,
	// 		display: "none"
	// 	})
	// ]);


	// var scene_3 = new TimelineMax({paused: true});
	// scene_2.add([
	// 	TweenLite.to($('#weather'), 0.8, {
	// 		opacity: 1,
	// 		ease: Expo.easeIn
	// 	}),
	// 	TweenLite.to($('#time'), 0.8, {
	// 		opacity: 1,
	// 		y: 50,
	// 	})
	// ]);

	// var scene_2 = new TimelineMax({paused: true});
	// scene_2.add([
	// 	TweenLite.to($('#weather'), 0.4, {
	// 		delay: 5.2,
	// 		display: "block"
	// 	}),
	// 	TweenLite.to($('#time'), 0.4, {
	// 		delay: 5.5,
	// 		display: "block"
	// 	})
	// ]);

	
	// var playVids = function (){

	// 	var myPlayers = [
	// 		videojs("video_1"),
	// 		videojs("video_2"),
	// 		videojs("video_3"),
	// 		videojs("video_4"),
	// 		videojs("video_5"),
	// 		videojs("video_6"),
	// 		videojs("video_7"),
	// 		videojs("video_8"),
	// 		videojs("video_9"),
	// 		videojs("video_10"),
	// 		videojs("video_11"),
	// 		videojs("video_12"),
	// 		videojs("video_13"),
	// 		videojs("video_14"),
	// 		videojs("video_15"),
	// 		videojs("video_16"),
	// 		videojs("video_17")
	// 	];



	// 	$.each( myPlayers, function( key, value ) {
	// 		$('.vjs-playing').show();
	// 		myPlayers[key].on('ended', function() {
	// 			var next = key + 1;
	// 			console.log(key);
	// 			if (next == 1) {
	// 				$('#scene_2').hide();
	// 				$('#scene_3').show();

	// 			};
	// 			if (next == 2) {
	// 			};
	// 			if (next < myPlayers.length) {
	// 				$('.vjs-ended').hide();
	// 				myPlayers[next].play();	
	// 				console.log("change");
	// 			}else{
	// 				console.log('finished');
	// 				return false;
	// 			}
	// 		});
	// 	});		
	// }


});