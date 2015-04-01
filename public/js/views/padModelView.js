App.Views.PadModelView = Backbone.View.extend({
	initialize: function() {
		console.log('VIEW: pad view created');
		this.template = Handlebars.compile( $('#pad-template').html() );
		this.render();
	},
	render: function() {
		var padTemplate = this.template(this.model.toJSON());
		this.$el.html(padTemplate);
	},
	play: function() {
		console.log('pad played');
	},
	// compositionKeeper: function() {
	// 	console.log('pad clicked');
	// },
	events: {
		'click': 'play',
		// 'click': 'compositionKeeper'
	},
});