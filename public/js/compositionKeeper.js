var compositionKeeper = {
	// 'recordStart' is a timestamp of when the record button was pressed.
	clearComposition: function() {
		App.compositionArray.length = 0;
	},
	keeper: function(id, stamp) {
		var newStamp = {};
		newStamp.id = id;
		newStamp.time = stamp;
		App.compositionArray.push(newStamp);
	}
};