var compositionKeeper = {
	// 'recordStart' is a timestamp of when the record button was pressed.
	clearComposition: function() {
		App.compositionArray.length = 0;
	},
	keeper: function(stamp) {
		var newStamp = {};
		var time = stamp - App.recordStart;
		// newStamp[this.id] = sdkfjksdlf,
		newStamp.ts = time;
		//adds timestamp property to the composition array object
		App.compositionArray.push(newStamp);
	}
};