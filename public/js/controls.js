$(function() {
	$('#record').on('click', controls.record);
	$('#play').on('click', controls.play);
	$('#stop').on('click', controls.stop);
});


var controls = {
	record: function() {
		$('#record').toggleClass('padOn');
		if(!App.recordStart) {
			App.compositionArray.length = 0;
			App.recordStart = event.timeStamp;
		} else if(App.recordStart) {
			App.recordStart = false;
		};

		
	},
	play: function() {
		console.log('PLAY BRUUUUUHH');
	},
	stop: function() {
		console.log('Stop BRUUUUUHH');
	}
};