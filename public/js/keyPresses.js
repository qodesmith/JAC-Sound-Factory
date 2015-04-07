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

		if(!App.modalStatus) {
			// 1-4
			if(e.which === 49) {
				padTriggerTop(1);
			} else if (e.which === 50) {
				padTriggerTop(2);
			} else if (e.which === 51) {
				padTriggerTop(3);
			} else if (e.which === 52) {
				padTriggerTop(4);
			} 
			// q,w,e,r
			else if (e.keyCode === 81) {
				padTriggerTop(5);
			} else if (e.which === 87) {
				padTriggerTop(6);
			} else if (e.which === 69) {
				padTriggerTop(7);
			} else if (e.which === 82) {
				padTriggerTop(8);
			} 
			// a,s,d,f
			else if (e.which === 65) {
				padTriggerBottom(1);
			} else if (e.which === 83) {
				padTriggerBottom(2);
			} else if (e.which === 68) {
				padTriggerBottom(3);
			} else if (e.which === 70) {
				padTriggerBottom(4);
			} 
			// z,x,c,v
			else if (e.which === 90) {
				padTriggerBottom(5);
			} else if (e.which === 88) {
				padTriggerBottom(6);
			} else if (e.which === 67) {
				padTriggerBottom(7);
			} else if (e.which === 86) {
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

	// Toggle classes: changes the pads bg color.
	$('#top-pad-' + pad).toggleClass('pad pad2');
	$('#top-pad-' + pad)[0].play();

	// Re-toggle classes: timed function, changed the bg color.
	setTimeout(function () {
		$('#top-pad-' + pad).toggleClass('pad pad2');
	}, 100);
};

// Bottom 8 pads.
var padTriggerBottom = function(pad) {
	$('#bottom-pad-' + pad).toggleClass('pad pad2');
	$('#bottom-pad-' + pad)[0].play();
	setTimeout(function () {
		$('#bottom-pad-' + pad).toggleClass('pad pad2');
	}, 100);
};