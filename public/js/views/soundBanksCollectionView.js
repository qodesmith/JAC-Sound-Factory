App.Views.SoundBanksCollectionView = Backbone.View.extend({
	el: '#test2',
	initialize: function() {
		console.log('VIEW: sound banks collection view created');
		this.listenTo(this.collection, 'add', this.renderOne);
	},
	renderAll: function() {
		console.log('***********Banks Collection View renderAll');
		this.collection.each(this.renderOne, this);
	},
	renderOne: function(bankModel) {
		console.log('***********Banks Collection View renderOne');
		var newBanksView = new App.Views.SoundBankModelView({model: bankModel});
		this.$el.append(newBanksView.el);
	}
});