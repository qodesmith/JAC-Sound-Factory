App.Collections.SoundsFXCollection = Backbone.Collection.extend({
	initialize: function() {
	},
	model: App.Models.SoundModel,

	// This url will default to a specific bank
	// each time the page loads. The user can
	// change it at their discretion.
	//TODO + FIXME : FIND A WAY TO NOT HARD CODE THIS
	url: 'sound_banks/11/sounds',
});