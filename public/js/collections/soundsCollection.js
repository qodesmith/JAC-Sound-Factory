App.Collections.SoundsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('COLLECTION: sounds created');
		this.fetch();
	},
	model: App.Models.SoundModel,
	url: '/sounds'
});