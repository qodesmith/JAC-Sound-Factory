App.Collections.CompositionsCollection = Backbone.Collection.extend({
	initialize: function() {
		console.log('COMP COLLECTION');
	},
	model: App.Models.CompositionModel,
	url: '/compositions'
});