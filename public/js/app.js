$(function() {
	console.log('application loaded');

	// Sounds
	App.soundsCollection = new App.Collections.SoundsCollection;
	App.soundsFXCollectionView = new App.Views.SoundsFXCollectionView({collection: App.soundsCollection});
	App.soundsFXCollectionView = new App.Views.SoundsDrumsCollectionView({collection: App.soundsCollection});
	App.soundsCollection.fetch();

	// Sound Banks
	App.soundBanks = new App.Collections.SoundBanks;
	App.soundBanksFXView = new App.Views.SoundBanksFXCollectionView({collection: App.soundBanks});
	App.soundBanksDrumsView = new App.Views.SoundBanksDrumsCollectionView({collection: App.soundBanks});
	App.soundBanks.fetch();
});

var App = {
	Models: {},
	Collections: {},
	Views: {}
};