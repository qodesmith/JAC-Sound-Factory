App.Views.SoundsFXCollectionView = Backbone.View.extend({
	el: '#top8',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderOne);
	},
	renderOne: function(soundModel) {
		var newSoundView = new App.Views.SoundModelView({model: soundModel});
		
		// Keep a running counter that only
		// goes up to 8 then starts over.
		if(this.counter === 8) {
			this.counter = 0;
		};
		this.counter += 1;

		// Use the counters # to help create
		// an ID for each of the top pads.
		newSoundView.$el.attr('id', 'top-pad-' + this.counter);
		
		this.$el.append(newSoundView.el);
	},
	counter: 0
});