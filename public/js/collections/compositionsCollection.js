App.Collections.CompositionsCollection = Backbone.Collection.extend({
	initialize: function() {},
	model: App.Models.CompositionModel,
	url: '/compositions'
});