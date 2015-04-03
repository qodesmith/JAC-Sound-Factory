App.Views.SoundModelView = Backbone.View.extend({
	className: 'pad',
	initialize: function() {
		console.log('VIEW: sound model view created');
		this.template = Handlebars.compile($('#sound-template').html());
		this.render();
	},
	render: function() {
		var padTemplate = this.template(this.model.toJSON());
		this.$el.html(padTemplate);
	},
	play: function() {
		debugger;
		console.log('pad played');
	},
	events: {
		'click': 'play'
	}
});