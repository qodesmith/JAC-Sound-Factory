$(function() {
	console.log('application loaded');
	App.context = new AudioContext();
	// Sounds - FX
	App.soundsFXCollection = new App.Collections.SoundsFXCollection;
	App.soundsFXCollectionView = new App.Views.SoundsFXCollectionView({collection: App.soundsFXCollection});
	App.soundsFXCollection.fetch();

	// Sounds - Drums
	App.soundsDrumsCollection = new App.Collections.SoundsDrumsCollection;
	App.soundsDrumsCollectionView = new App.Views.SoundsDrumsCollectionView({collection: App.soundsDrumsCollection});
	App.soundsDrumsCollection.fetch();

	// Sound Banks
	App.soundBanks = new App.Collections.SoundBanks;
	App.soundBanksFXView = new App.Views.SoundBanksFXCollectionView({collection: App.soundBanks});
	App.soundBanksDrumsView = new App.Views.SoundBanksDrumsCollectionView({collection: App.soundBanks});
	App.soundBanks.fetch();

	// Function to map pads to keys on the keyboard
	keyPresses();
	getBackground();
});

var App = {
	Models: {},
	Collections: {},
	Views: {},
	recordStart: null,
	compositionArray: [],
	currentDrumsBankID: null,
	currentFXBankID: null,
};