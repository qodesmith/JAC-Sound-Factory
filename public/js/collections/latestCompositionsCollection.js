App.Collections.LatestCompositionsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('latest collection created');
	},
	model: App.Models.LatestCompositionModel,
	url: '/latest'
});