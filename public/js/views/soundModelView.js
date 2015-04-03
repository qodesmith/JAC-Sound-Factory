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
		// Console the id of the pad that was clicked.
		console.log(this.$el.attr('id') + ' pad played');
		// debugger;
		var audio = this.$el.find('audio')[0];
		audio.play();
	},
	events: {
		'click': 'play'
	}
});