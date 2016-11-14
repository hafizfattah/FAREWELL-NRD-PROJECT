
requirejs.config({
	waitSeconds: 200,
	paths : {
		// JS LIBRARY
		jquery : 'lib/jquery.min',
		gsap : 'lib/TweenMax.min',
		openWeather : 'lib/openWeather',
		moment : 'lib/moment-with-locales.min',
		videojs : 'lib/video.min',
		text : 'lib/text',
        json : 'lib/json', 

		// MODULES
		time : 'modules/time',
		weather : 'modules/weather',
		video : 'modules/video'
	},
	shim: {
		"openWeather" : {
			deps: ['jquery']
		},
		"weather" : {
			deps: ['openWeather']
		},
		"moment" : {
			deps: ['jquery']
		},
		"time" : {
			deps: ['moment']
		},
		"video" : {
			deps: ['videojs']
		}

		// "time" : {
		// 	deps: ['jquery', 'moment'],
		// 	exports: 'Time'
		// },
		// "init" : {
		// 	deps: ['openWeather', 'videojs', 'weather', 'time', 'methods'],
		// 	exports: 'Init'
		// }
	},
    deps: ['app']

})
