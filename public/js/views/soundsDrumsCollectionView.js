App.Views.SoundsDrumsCollectionView = Backbone.View.extend({
	el: '#bot8',
	initialize: function() {
		console.log('VIEW: sounds collection view created');
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
		// an ID for each of the bottom pads.
		newSoundView.$el.attr('id', 'bottom-pad-' + this.counter);
		
		this.$el.append(newSoundView.el);
	},
	counter: 0
});