App.Views.SoundBanksFXCollectionView = Backbone.View.extend({
	el: '#bot8',
	initialize: function() {
		console.log('VIEW: sound banks collection view created');
		this.listenTo(this.collection, 'add', this.renderOne);
	},
	// renderAll: function() {
	// 	console.log('***********Banks Collection View renderAll');
	// 	this.collection.each(this.renderOne, this);
	// },
	renderOne: function(bankModel) {
		console.log('***********Banks Collection View renderOne');

		if (bankModel.type === 'drums') {
			var newBanksView = new App.Views.SoundBankModelView({model: bankModel});
			this.$el.append(newBanksView.el);
		};
	}
});