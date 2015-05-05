var controls = {
	recordingStatus: false,
	playStatus: false,
	record: function() {
		// Do not record during playback.
		if(!controls.playStatus) {

			// If this is our 1st time hitting the record button,
			// the status will be false. If so, reset App.recordStart.
			// If this is the second time hitting the record button,
			// the status will be true, and this will be ignored.
			if(!controls.recordingStatus) {
				App.compositionArray.length = 0;
				App.recordStart = event.timeStamp;
				$('#play').attr('disabled','');
			};

			// 2nd record-button click executions.
			if(controls.recordingStatus) {
				$('#play').removeAttr('disabled');
				// App.recordStart = App.compositionArray[0].time
				if(App.compositionArray.length) {
					compositionKeeper.removeSilence();
					App.recordStart = null;
				}
			};

			// Toggle the recording status.
			controls.recordingStatus = !controls.recordingStatus;

			// Turn the recording button red.
			$('#record').toggleClass('recordOn');

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

				var padStroke = setTimeout(function() {
					console.log('New padStroke, #' + i);
					var audio = $('#' + what).find('audio')[0];
					$('#' + what)[0].play();
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

		} else if(controls.recordingStatus) {
			// flash an X over the play button
			// using the timeout function
		};
	},
	showModal: function() {
		// Only save IF:
		// we HAVE a populated array,
		// we're NOT playing
		// we're NOT recording.
		if(App.compositionArray.length && !controls.playStatus && !controls.recordingStatus) {

			App.modalStatus = true;

			// Darken the background.
			$('div.modalBackground').fadeIn(100);

			// Display the modal.
			$('.modal').fadeIn(500);
			$('[type = "submit"]').on('click', controls.save);
		};
	},
	save: function() {
		
		// JS object to a string for storing in our database.
		// JSON.parse(x) = the opposite.
		var newComposition = JSON.stringify(App.compositionArray);
		var userName = $('[name = "yourName"]').val();
		var compName = $('[name = "composition"]').val();

		// Call to create a new user AND create a new composition
		// AND assign that composition to the user just created.
		$.ajax({
			url: '/users',
			method: 'POST',
			data: {user_name: userName}
		}).done(function(user) {
			var userId = parseInt(user.id);
			$.ajax({
				url:'/compositions',
				method: 'POST',
				data: {
					fx_bank_id: App.currentFXBankID,
					drum_bank_id: App.currentDrumsBankID,
					composition: newComposition,
					name: compName,
					user_id: userId
				}
			}).done(function(data) {
				// Refresh the composition collection to reflect new changes.
				App.compositionsCollection.fetch();
			});
		});

		// Remove the dark background.
		$('.modalBackground').hide();
		App.modalStatus = false;
	}
};