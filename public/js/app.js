$(function() {
	console.log('application loaded');

	App.soundsCollection = new App.Collections.SoundsCollection;
	App.soundsCollectionView = new App.Views.SoundsCollectionView({collection: App.soundsCollection});
	App.soundsCollection.fetch();

	App.soundBanks = new App.Collections.SoundBanks;
	App.soundBanksView = new App.Views.SoundBanksCollectionView({collection: App.soundBanks});
	App.soundBanks.fetch();
});

var App = {
	Models: {},
	Collections: {},
	Views: {}
};