// Multiple keys can be pressed simultaneously
// to allow for greater pad control.


var keyPresses = function() {

	// Part of the multi-keypress functionality.
	var keys = {};

	// Functions to visualize a keypress on the associated pad.
	var padBlinkTop = function(pad) {
		$('#top-pad-' + pad).toggleClass('pad pad2');
		setTimeout(function () {
					$('#top-pad-' + pad).toggleClass('pad pad2');
				}, 100);
	};

	var padBlinkBottom = function(pad) {
		$('#bottom-pad-' + pad).toggleClass('pad pad2');
		setTimeout(function () {
					$('#bottom-pad-' + pad).toggleClass('pad pad2');
				}, 100);
	};



	$(document).keydown(function(e) {

		// Part of the multi-keypress functionality.
		keys[e.which] = true;

		//////////////
		// KEY MAPS //
		//////////////

		// 1-4
		if(e.which == 49) {
			console.log('1 pressed');
			padBlinkTop(1);
		} else if (e.which == 50) {
			console.log('2 pressed');
			padBlinkTop(2);
		} else if (e.which == 51) {
			console.log('3 pressed');
			padBlinkTop(3);
		} else if (e.which == 52) {
			console.log('4 pressed');
			padBlinkTop(4);
		} 

		// q,w,e,r
		else if (e.keyCode == 81) {
			console.log('q pressed');
			padBlinkTop(5);
		} else if (e.which == 87) {
			console.log('w pressed');
			padBlinkTop(6);
		} else if (e.which == 69) {
			console.log('e pressed');
			padBlinkTop(7);
		} else if (e.which == 82) {
			console.log('r pressed');
			padBlinkTop(8);
		} 

		// a,s,d,f
		else if (e.which == 65) {
			console.log('a pressed');
			padBlinkBottom(1);
		} else if (e.which == 83) {
			console.log('s pressed');
			padBlinkBottom(2);
		} else if (e.which == 68) {
			console.log('d pressed');
			padBlinkBottom(3);
		} else if (e.which == 70) {
			console.log('f pressed');
			padBlinkBottom(4);
		} 

		// z,x,c,v
		else if (e.which == 90) {
			console.log('z pressed');
			padBlinkBottom(5);
		} else if (e.which == 88) {
			console.log('x pressed');
			padBlinkBottom(6);
		} else if (e.which == 67) {
			console.log('c pressed');
			padBlinkBottom(7);
		} else if (e.which == 86) {
			console.log('v pressed');
			padBlinkBottom(8);
		}
	});

	// Part of the multi-keypress functionality.
	$(document).keyup(function(e) { 
	  allowed = true;
	  delete keys[e.which];
	});

};