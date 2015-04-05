$(function() {
	$('#record').on('click', controls.record);
	$('#play').on('click', controls.play);
	$('#stop').on('click', controls.stop);
	$('#save').on('click', controls.save);
});

// var timer 	 = null,
// 		interval = 1000,
// 		value		 = 0;

var controls = {
	recordingStatus: false,
	playStatus: false,
	// stopStatus: false,
	// value: 0,
	record: function() {
		// Do not record during playback.
		if(!controls.playStatus) {

			// If this is our 1st time hitting the record button,
			// the status will be false. If so, reset App.recordStart.
			// If this is the second time hitting the record button,
			// the status will be true, and this will be ignored.
			if(!controls.recordingStatus) {
				App.recordStart = null; // Only reset on 1st record-button press.
				$('#play').attr('disabled','');
				// debugger; //1
			};

			// 2nd record-button click executions.
			if(controls.recordingStatus) {
				$('#play').removeAttr('disabled');
				// debugger; // 2
				// App.recordStart = App.compositionArray[0].time
				if(App.compositionArray.length) {
					compositionKeeper.removeSilence();
				}
			};

			// Toggle the recording status.
			controls.recordingStatus = !controls.recordingStatus;

			// Turn the recording button red.
			$('#record').toggleClass('recordOn');
			// debugger; // 3

			// If recordStart is false (empty), reset our composition
			// array and set recordStart time to event.timeStamp.
			if(!App.recordStart) {
				App.compositionArray.length = 0;
				App.recordStart = event.timeStamp;
			};

			// Grey out play button
			$('#play').toggleClass('playOff');

		};
	},
	play: function() {
		if(!controls.recordingStatus && !controls.playStatus && App.compositionArray.length) { // Only play if NOT recording OR if not playing already.
			
			// Change the playStatus to indicate currenty playing.
			controls.playStatus = !controls.playStatus;

			$('#play').toggleClass('playOn');

			var composition = App.compositionArray;

			// 'what', 'when', and 'i' get their values fromthe for
			// loop below. This function is triggered by that loop.
			var doSetTimeout = function(what, when, i) {
				setTimeout(function() {
					var audio = $('#' + what).find('audio')[0];
					audio.load();
					audio.play();
					if (i === composition.length - 1) {
						controls.playStatus = !controls.playStatus;
						$('#play').toggleClass('playOn');
					};
				}, when);
			};

			for(var i = 0; i < composition.length; i++) {
				var when = composition[i].time;
				var what = composition[i].id;

				doSetTimeout(what, when, i);
			};

			// Gray out record button

		} else if(controls.recordingStatus) {
			// flash an X over the play button
			// using the timeout function
			console.log('Recording in session...')
		};
	},
	// play2: function() {
	// 	// Only play if NOT recording and NOT already playing
	// 	if(!controls.recordingStatus && !controls.playStatus) {

	// 		// Flip the play status
	// 		controls.playStatus = !controls.playStatus;

	// 		// Start a countup, 1 millisecond intervals.
	// 		timer = setInterval(function() {
	// 			value += 1;
	// 		}, 1);

	// 		for(var i = 0; i < App.compositionArray.length; i++) {
	// 			if
	// 		}

	// 		// When the timer is the same value as the event
	// 		// time in the array, trigger that events audio.



	// 	} else if() {

	// 	};
	// 	timer = setInterval(function() {
	// 		value += 1;
	// 		console.log(value)
	// 	}, interval);
	// },
	stop: function() {
		console.log('Stop BRUUUUUHH');
		clearInterval(controls.timer);
	},
	save: function() {
		console.log('Save clicked');
	}
};