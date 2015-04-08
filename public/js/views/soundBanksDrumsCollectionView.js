App.Views.SoundBanksDrumsCollectionView = Backbone.View.extend({
	el: '#drums-container',
	initialize: function() {
		this.listenTo(this.collection, 'add', this.renderOne);
	},
	renderOne: function(bankModel) {
		if (bankModel.attributes.type === 'drums') {
			var newBanksView = new App.Views.SoundBankModelView({model: bankModel});
			this.$el.append(newBanksView.el);
		};
	}
});