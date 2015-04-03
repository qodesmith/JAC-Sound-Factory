App.Views.SoundBankModelView = Backbone.View.extend({
	className: 'sound-bank',
	initialize: function() {
		console.log('VIEW: sound bank model view created');
		this.template = Handlebars.compile($('#soundBank-template').html());
		this.render();
	},
	render: function() {
		var bankTemplate = this.template(this.model.toJSON());
		this.$el.html(bankTemplate);
	},
	events: {
		'click': 'getCollection'
	},
	getCollection: function() {
		console.log('Bank was clicked!');
		var collection = this.model.attributes.id;
		var collectionType = this.model.attributes.type;
		var collectionName = this.model.attributes.name;
		
		if(collectionType === 'fx') {
			// Populate the side container to show
			// which sound back is the active one.
			$('#side-top').html(collectionName);

			// Empty the view containing the collection.
			$('#top8').empty();

			// Set our current collection's url to the new id of our clicked bank.
			App.soundsFXCollection.url = 'sound_banks/' + collection + '/sounds';

			// Fetch: will replace the old collection with the new one via the url.
			App.soundsFXCollection.fetch();

		} else if(collectionType === 'drums') {
			$('#side-bot').html(collectionName);
			$('#bot8').empty();
			App.soundsDrumsCollection.url = 'sound_banks/' + collection + '/sounds';
			App.soundsDrumsCollection.fetch();
		};
	},
});