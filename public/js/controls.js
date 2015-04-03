$(function() {
	$('#record').on('click', controls.record);
	$('#play').on('click', controls.play);
	$('#stop').on('click', controls.stop);
});


var controls = {
	record: function() {
		App.recordStart = event.timeStamp;
	},
	play: function() {
		console.log('PLAY BRUUUUUHH');
	},
	stop: function() {
		console.log('Stop BRUUUUUHH');
	}
};