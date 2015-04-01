App.Views.SoundsCollectionView = Backbone.View.extend({
	el: '#test',
	initialize: function() {
		console.log('VIEW: sounds collection view created');
		// this.listenTo(this.collection, 'reset', this.renderAll);
		this.renderAll();
	},
	renderAll: function() {
		this.collection.each(this.renderOne, this);
	},
	renderOne: function(soundModel) {
		var newSoundView = new App.Views.SoundModelView({model: soundModel});
		this.$el.append(newSoundView.el);
	}
});