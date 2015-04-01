App.Models.PadModel = Backbone.Model.extend({
	initialize: function() {
		console.log('MODEL: pad created');
	},
	defaults: {
		name: 'Test name',
		id: ''
	}
});