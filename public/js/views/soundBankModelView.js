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
		
		if(collectionType === 'drums') {
			console.log(collectionType);
			console.log(this.model.attributes.name);
		} else if(collectionType === 'fx') {
			console.log(collectionType);
			console.log(this.model.attributes.name);
		};
	},
});