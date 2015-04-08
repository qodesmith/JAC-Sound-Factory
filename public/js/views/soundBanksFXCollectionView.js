App.Views.SoundBanksFXCollectionView = Backbone.View.extend({
	el: '#fx-container',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderOne);
	},
	renderOne: function(bankModel) {
		if (bankModel.attributes.type === 'fx') {
			var newBanksView = new App.Views.SoundBankModelView({model: bankModel});
			this.$el.append(newBanksView.el);
		};
	}
});