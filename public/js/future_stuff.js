	// Store in an array which pad was hit (or clicked) and when
	compositionKeeper = function() {
		newStamp = {};
		newStamp[this.id] = event.timeStamp;

		App.compositionArray.push(newStamp);
	},
	clearComposition: function() {
		App.compositionArray.length = 0;
	}
});


// this goes in App
	compositionArray: []