$(function() {
	console.log('application loaded');

	App.soundBanks = new App.Collections.SoundBanks;
	App.soundBanksView = new App.Views.SoundBanksCollectionView({collection: App.soundBanks});
	App.soundBanks.fetch();

	App.soundsCollection = new App.Collections.SoundsCollection;
	App.soundsCollectionView = new App.Views.SoundsCollectionView({collection: App.soundsCollection});
	App.soundsCollection.fetch();	

});



var App = {
	Models: {},
	Collections: {},
	Views: {}
};