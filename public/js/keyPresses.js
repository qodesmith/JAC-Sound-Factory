// Multiple keys can be pressed simultaneously
// to allow for greater pad control.

var keyPresses = function() {

	// Part of the multi-keypress functionality.
	var keys = {};

	// When the key is pressed down, do this...
	$(document).keydown(function(e) {

		// Part of the multi-keypress functionality.
		keys[e.which] = true;

		//////////////
		// KEY MAPS //
		//////////////

		// 1-4
		if(e.which === 49) {
			console.log('1 pressed');
			padTriggerTop(1);
		} else if (e.which === 50) {
			console.log('2 pressed');
			padTriggerTop(2);
		} else if (e.which === 51) {
			console.log('3 pressed');
			padTriggerTop(3);
		} else if (e.which === 52) {
			console.log('4 pressed');
			padTriggerTop(4);
		} 

		// q,w,e,r
		else if (e.keyCode === 81) {
			console.log('q pressed');
			padTriggerTop(5);
		} else if (e.which === 87) {
			console.log('w pressed');
			padTriggerTop(6);
		} else if (e.which === 69) {
			console.log('e pressed');
			padTriggerTop(7);
		} else if (e.which === 82) {
			console.log('r pressed');
			padTriggerTop(8);
		} 

		// a,s,d,f
		else if (e.which === 65) {
			console.log('a pressed');
			padTriggerBottom(1);
		} else if (e.which === 83) {
			console.log('s pressed');
			padTriggerBottom(2);
		} else if (e.which === 68) {
			console.log('d pressed');
			padTriggerBottom(3);
		} else if (e.which === 70) {
			console.log('f pressed');
			padTriggerBottom(4);
		} 

		// z,x,c,v
		else if (e.which === 90) {
			console.log('z pressed');
			padTriggerBottom(5);
		} else if (e.which === 88) {
			console.log('x pressed');
			padTriggerBottom(6);
		} else if (e.which === 67) {
			console.log('c pressed');
			padTriggerBottom(7);
		} else if (e.which === 86) {
			console.log('v pressed');
			padTriggerBottom(8);
		}

		// space bar - controls play button
		else if (e.which === 32) {
			console.log('space bar pressed');
			controls.play();

		// enter - controls record button
		} else if (e.which === 13) {
			console.log('enter pressed');
			controls.record();
		};
	});

	// Part of the multi-keypress functionality.
	$(document).keyup(function(e) { 
	  allowed = true;
	  delete keys[e.which];
	});
};

///////////////////////////////////////////
//   Functions to visualize a keypress   //
// on the associated pad: a brief flash. //
///////////////////////////////////////////

// Top 8 pads.
var padTriggerTop = function(pad) {

	// // Toggle classes: changes the pads bg color.
	// $('#top-pad-' + pad).toggleClass('pad pad2');

	// // Grab the pad's audio tag via a jQuery and play it.
	// var audio = $('#top-pad-' + pad).find('audio')[0];
	// audio.load();
	// audio.play();
	
	// // If recording, log the pads pressed.
	// var id = 'top-pad-' + pad;
	// var stamp = event.timeStamp - App.recordStart;
	// compositionKeeper.keeper(id, stamp);

	// // Re-toggle classes: timed function, changed the bg color.
	// setTimeout(function () {
	// 			$('#top-pad-' + pad).toggleClass('pad pad2');
	// 		}, 100);
};

// Bottom 8 pads.
var padTriggerBottom = function(pad) {
	// $('#bottom-pad-' + pad).toggleClass('pad pad2');
	// var audio = $('#bottom-pad-' + pad).find('audio')[0];
	// audio.load();
	// audio.play();

	// var id = 'bottom-pad-' + pad;
	// var stamp = event.timeStamp - App.recordStart;
	// compositionKeeper.keeper(id, stamp);

	// setTimeout(function () {
	// 			$('#bottom-pad-' + pad).toggleClass('pad pad2');
	// 		}, 100);
};