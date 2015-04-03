App.Collections.SoundsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('COLLECTION: sounds collection created');
		console.log(this)
	},
	model: App.Models.SoundModel,

	// This url will default to a specific bank
	// each time the page loads. The user can
	// change it at their discretion.
	//TODO + FIXME : FIND A WAY TO NOT HARD CODE THIS
	url: 'sound_banks/808%20kit/sounds',
});