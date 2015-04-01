App.Views.SoundBanksCollectionView = Backbone.View.extend({
	el: '#test2',
	initialize: function() {
		console.log('VIEW: sound banks collection view created');
		this.renderAll();
	},
	renderAll: function() {
		this.collection.each(this.renderOne, this);
	},
	renderOne: function(bankModel) {
		var newBanksView = new App.Views.SoundBankModelView({model: bankModel});
		this.$el.append(newBanksView.el);
	}
});