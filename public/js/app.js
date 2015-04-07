$(function() {
	console.log('application loaded');
	App.context = new webkitAudioContext();
	App.modal = new App.Views.ModalView();
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
	App.compositionsCollection = new App.Collections.CompositionsCollection;
	App.compositionsView = new App.Views.CompositionsView({collection: App.compositionsCollection});
	App.compositionsCollection.fetch();

	// Function to map pads to keys on the keyboard
	keyPresses();
	// getBackground();

	$('#record').on('click', controls.record);
	$('#play').on('click', controls.play);
	// $('#stop').on('click', controls.stop);
	$('#save').on('click', controls.showModal);
});
var canvas, ctx, source, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
var App = {
	Models: {},
	Collections: {},
	Views: {},
	recordStart: null, // Holds the 1st timeStamp in a recording
	compositionArray: [],
	timeoutArray: [],
	currentDrumsBankID: null,
	currentFXBankID: null,
	modalStatus: false
};

