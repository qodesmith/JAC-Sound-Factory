$(function() {
	console.log('application loaded');
	App.context = new webkitAudioContext();
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

	// Latest Compositions Section
	// App.latestCompositions = new App.Collections.LatestCompositionsCollection;
	// App.latestCompositionsView = new App.Views.LatestCompositionsView({collection: App.latestCompositions});
	// App.latestCompositions.fetch();

	// Function to map pads to keys on the keyboard
	keyPresses();
	getBackground();
});
var canvas, ctx, source, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
var App = {
	Models: {},
	Collections: {},
	Views: {},
	recordStart: null, // Holds the 1st timeStamp in a recording
	compositionArray: [1],
	timeoutArray: [],
	currentDrumsBankID: null,
	currentFXBankID: null,
	modalStatus: false
};

