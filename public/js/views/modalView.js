App.Views.ModalView = Backbone.View.extend({
	el: '.modalBackground',
	initialize: function() {
		console.log('VIEW: modal view created');
		this.template = Handlebars.compile($('#modal-template').html());
		this.render();
	},
	render: function() {
		this.$el.append(this.template());
	},
	events: {
		'click #close span': 'close'
	},
	close: function() {
		$('.modalBackground').fadeOut();
		$('.modal').hide();
		App.modalStatus = false;
	}
});
