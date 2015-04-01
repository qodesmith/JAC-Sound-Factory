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
		'click': 'poop'
	},
	poop: function() {
		console.log('Bank was clicked!');
	}

});