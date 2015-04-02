App.Views.SoundsCollectionView = Backbone.View.extend({
	//TODO : make real el !!
	el: '#test',
	initialize: function() {
		console.log('VIEW: sounds collection view created');
		this.listenTo(this.collection, 'add', this.renderOne);
	},
	renderOne: function(soundModel) {
		var newSoundView = new App.Views.SoundModelView({model: soundModel});
		this.$el.append(newSoundView.el);
	}
});