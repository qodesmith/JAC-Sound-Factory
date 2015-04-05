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
	// events: {
	// 	'click': 'play'
	// },
	// newSound = function(url) {
	// 	var audio = new Audio();
	// 	audio.src = url;
	// 	audio.controls = false;
	// },
});