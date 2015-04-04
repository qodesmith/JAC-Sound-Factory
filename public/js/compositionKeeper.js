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
	},
	removeSilence: function() {
		var array = App.compositionArray;
		var first = array[0].time - 1;

		for (var i = 0; i < array.length; i++) {
			array[i].time = array[i].time - first
		}
	}
};