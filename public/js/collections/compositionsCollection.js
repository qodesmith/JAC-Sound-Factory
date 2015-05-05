App.Collections.CompositionsCollection = Backbone.Collection.extend({
	initialize: function() {},
	model: App.Models.CompositionModel,
	url: '/compositions/latest' // Route logic serves the latest 8 compositions.
});