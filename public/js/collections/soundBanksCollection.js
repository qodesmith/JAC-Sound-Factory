App.Collections.SoundBanks = Backbone.Collection.extend({
	initialize: function() {
	},
	model: App.Models.SoundBankModel,
	url: '/sound_banks'
});