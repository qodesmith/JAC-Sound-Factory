$(function() {
	$('#record').on('click', controls.record);
	$('#play').on('click', controls.play);
	// $('#stop').on('click', controls.stop);
	$('#save').on('click', controls.showModal);
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
					audio.load();
					audio.play();
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
	showModal: function() {
		// Only save IF:
		// we HAVE a populated array,
		// we're NOT playing
		// we're NOT recording.
		if(App.compositionArray.length && !controls.playStatus && !controls.recordingStatus) {

			// Darken the background.
			$('div.modalBackground').fadeIn(100);
			// Create the new modal.
			var newModal = new App.Views.ModalView;
			$('[type = "submit"]').on('click', controls.save);
		};

	},
	save: function() {
		
		// JS object to a string for storing in our database.
		// JSON.parse(x) = the opposite.
		var newComposition = JSON.stringify(App.compositionArray);
		var userName = $('[name = "yourName"]').val(); //
		var compName = $('[name = "composition"]').val(); //

		if(confirm('Is this info correct?\nYour name: ' + userName + '\nComposition name: ' + compName)) {
			// Call to create a new user AND create a new composition
			// AND assign that composition to the user just created.
			$.ajax({
				url: '/users',
				method: 'POST',
				data: {user_name: userName}
			}).done(function(res) {
				var userId = res.id;
				$.ajax({
					url:'/users/' + userId + '/compositions',
					method: 'POST',
					data: {
						fx_bank_id: App.currentFXBankID,
						drum_bank_id: App.currentDrumsBankID,
						composition: newComposition,
						name: compName,
						user_id: userId
					}
				});
			});

			// Remove the dark background.
			$('.modalBackground').hide();
			App.modalStatus = false;

		}

	}
};