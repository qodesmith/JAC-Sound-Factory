App.Views.CompositionsView = Backbone.View.extend({
	el: '#compositions',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.render);
	},
	render: function(compositionModel) {
		var newCompositionView = new App.Views.CompositionModelView({ model: compositionModel });
	  this.$el.append(newCompositionView.el);
  }
});



