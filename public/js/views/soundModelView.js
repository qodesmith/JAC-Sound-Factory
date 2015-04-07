App.Views.SoundModelView = Backbone.View.extend({
	className: 'pad',
	initialize: function() {
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
		var audio = this.$el.find('audio')[0];
		audio.load();
		audio.play();
		this.padStamp();
	},
	padStamp: function() {
		//Only record the stamps IF App.recordStart is truthy
		if(App.recordStart) {
			var id 		= event.currentTarget.id; 
			var stamp = event.timeStamp - App.recordStart;

			// Pass our timestamp value to the keeper function.
			compositionKeeper.keeper(id, stamp);
		}
	},
	events: {
		'click': 'play'
	}
});