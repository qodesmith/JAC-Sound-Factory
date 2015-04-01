App.Collections.SoundBanks = Backbone.Collection.extend({
	initialize: function() {
		console.log('COLLECTION: soundbanks created');
		this.fetch();
	},
	model: App.Models.SoundBankModel,
	url: '/sound_banks'
});