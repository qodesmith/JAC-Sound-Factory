App.Views.LatestCompositionsView = Backbone.View.extend({
	el: '#latest-compositions',
	initialize: function() {
		this.template = Handlebars.compile($('#test').html());
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});




// $.ajax({
// 				url: '/users',
// 				method: 'POST',
// 				data: {user_name: userName}
// 			}).done(function(res) {
// 				var userId = res.id;
// 				$.ajax({
// 					url:'/users/' + userId + '/compositions',
// 					method: 'POST',
// 					data: {
// 						fx_bank_id: App.currentFXBankID,
// 						drum_bank_id: App.currentDrumsBankID,
// 						composition: newComposition,
// 						name: compName,
// 						user_id: userId
// 					}
// 				});
// 			});