App.Collections.SoundsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('COLLECTION: sounds created');
	},
	model: App.Models.SoundModel,

	// This url will default to a specific bank
	// each time the page loads. The user can
	// change it at their discretion.
	url: 'sound_banks/1/sounds'
});