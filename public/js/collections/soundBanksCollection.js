App.Collections.SoundBanks = Backbone.Collection.extend({
	initialize: function() {
		console.log('COLLECTION: soundbanks created');
	},
	model: App.Models.SoundBankModel,
	url: '/sound_banks'
});