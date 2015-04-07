App.Collections.Users = Backbone.Collection.extend({
	model: App.Models.UserModel,
	url: '/users'
});