App.Views.PadsCollectionView = Backbone.View.extend({
	el: '#test',
	initialize: function() {
		console.log('VIEW: pads collection view created');
		// listenTo(sounds backs collection)
	},
	renderAll: function() {
		this.collection.each(this.renderOne, this);
	},
	renderOne: function(padModel) {
		var newPadView = new App.Views.PadModelView({model: padModel});
		this.$el.append(newPadView.el);
	}
});