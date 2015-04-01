$(function() {
	console.log('application loaded');
	// App.router = new App.Routers.Router();
	// Backbone.history.start();

	App.pads = new App.Collections.PadsCollection;
	App.padsView = new App.Views.PadsCollectionView({collection: App.pads});

	// App.pad = new App.Models.PadModel({name: 'Test Name'});
	// App.padView = new App.Views.PadModelView({model: App.pad})

	// fetch
});



var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};