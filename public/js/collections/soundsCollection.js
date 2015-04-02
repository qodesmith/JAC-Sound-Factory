App.Collections.SoundsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('COLLECTION: sounds created');

		// This line alone is created 16 models
		// this.fetch({reset: true});
	},
	model: App.Models.SoundModel,
	url: '/sounds'
});