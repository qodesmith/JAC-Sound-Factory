App.Collections.PadsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('COLLECTION: pads created');
	},
	model: App.Models.PadModel,
	// url: 'sound_banks/:id'
});