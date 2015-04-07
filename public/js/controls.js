$(function() {
	$('#record').on('click', controls.record);
	$('#play').on('click', controls.play);
	// $('#stop').on('click', controls.stop);
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

				// STOP functionality:
				// cancels the below timeout functions.
				// $('#stop').on('click', function() {
				// 	debugger;

				// 	// Revert the play status
				// 	controls.playStatus = !controls.playStatus;

				// 	// Turn the play button 'off'.
				// 	$('#play').toggleClass('playOn');
					
				// 	// Stop all the padStroke timeout functions.
				// 	clearTimeout(padStroke);
				// 	console.log('yo')

				// });

				// Timeout function
				var padStroke = setTimeout(function() {
					console.log('New padStroke, #' + i);
					var audio = $('#' + what).find('audio')[0];
					debugger; 
					$('#' + what)[0].play();
					if (i === composition.length - 1) {
						controls.playStatus = !controls.playStatus;
						$('#play').toggleClass('playOn');
					};
				}, when);
			};

			var stop = function() {

			}

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
	save: function() {
		console.log('Save clicked');

		// Only save IF we have a populated array,
		// IF we're not playing, and IF we're not recording.
		if(App.compositionArray.length && !controls.playStatus && !controls.recordingStatus) {
			
			// JS object to a string for storing in our database.
			// JSON.parse(x) = the opposite.
			var newComposition = JSON.stringify(App.compositionArray);
		};

		// Darken the background.
		$('div.modalBackground').fadeIn(100);

		var newModal = new App.Views.ModalView;

		// Remove the dark background.
		// $('.modalBackground').hide()
	}
};