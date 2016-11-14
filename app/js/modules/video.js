define('video', ['videojs'], function(videojs){

	var methods = {};
	
	// console.log(berak);
	
	// methods.tokai = function(){
	// 	weather.berak();
	// }
	
	methods.appendVideos = function(){
		for (var i = 1; i < 18; i++) {
			$('#videos').append('<video src=../video/'+ i +'.webm id=video'+ i +' class="video-js vjs-16-9" controls preload="auto"></video>');
		};
		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
			}

			return array;

		}
		var randomVids = [
			"../video/random/rand1.webm",
			"../video/random/rand2.webm",
			"../video/random/rand3.webm",
			"../video/random/rand4.webm",
			"../video/random/rand5.webm",
			"../video/random/rand6.webm",
			"../video/random/rand7.webm",
			"../video/random/rand8.webm",
			"../video/random/rand9.webm",
			"../video/random/rand10.webm",
			"../video/random/rand11.webm",
			"../video/random/rand12.webm",
			"../video/random/rand13.webm"
		];
		randomVids = shuffle(randomVids);
		console.log(randomVids);

		var randomVid1 = randomVids[0];
		var randomVid2 = randomVids[1];
		var randomVid3 = randomVids[2];

		$('#video10').attr('src', randomVid1);
		$('#video11').attr('src', randomVid2);
		$('#video12').attr('src', randomVid3);
	};

	
	methods.playVids = function (){
		$('.vjs-big-play-button').click(function(event) {
			$(this).hide();
			alert("tokai")
		});
		var myPlayers = [
			videojs("video1"),
			videojs("video2"),
			videojs("video3"),
			videojs("video4"),
			videojs("video5"),
			videojs("video6"),
			videojs("video7"),
			videojs("video8"),
			videojs("video9"),
			videojs("video10"),
			videojs("video11"),
			videojs("video12"),
			videojs("video13"),
			videojs("video14"),
			videojs("video15"),
			videojs("video16"),
			videojs("video17")
		];
		

		
		$.each( myPlayers, function( key, value ) {
			$('.vjs-playing').show();
			

			myPlayers[key].on('ended', function() {
				var next = key + 1;
				console.log(key);
				if (next == 1) {
					$('#scene_2').hide();
					$('#scene_3').show();
				};
				if (next < myPlayers.length) {
					$('.vjs-ended').hide();
					myPlayers[next].play();	
					console.log("change");
				}else{
					console.log('finished');
					return false;
				}
			});
		});		
	}


	return methods;

	

})