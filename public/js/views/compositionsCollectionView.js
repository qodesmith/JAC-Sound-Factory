App.Views.CompositionsView = Backbone.View.extend({
	el: '#compositions',
	initialize: function() {
    console.log('COMP COLLECTION VIEW');
		this.listenTo(this.collection, 'add', this.render);
	},
	render: function(compositionModel) {
		var newCompositionView = new App.Views.CompositionModelView({ model: compositionModel });
    // if(this.counter === 12) {
    //   this.counter = 0;
    // }
    // this.counter += 1;
    // newCompositionView.$el.attr('')
	  this.$el.append(newCompositionView.el);
  }


});



