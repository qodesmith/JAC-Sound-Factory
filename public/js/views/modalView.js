App.Views.ModalView = Backbone.View.extend({
	el: '.modalBackground',
	initialize: function() {
		console.log('VIEW: modal view created');
		this.template = Handlebars.compile($('#modal-template').html());
		this.render();
	},
	render: function() {
		this.$el.append(this.template()).css('display','none').fadeIn(500);
		App.modalStatus = true;
	},
	events: {
		'click div#x': 'close'
	},
	close: function() {
		$('.modalBackground').fadeOut();
		$('.modal').remove();
		App.modalStatus = false;
	}
});
