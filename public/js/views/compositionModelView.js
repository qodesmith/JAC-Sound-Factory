App.Views.CompositionModelView = Backbone.View.extend({
  className: 'composition',
  initialize: function() {
    console.log('COMP VIEW');
    this.template = Handlebars.compile($('#composition-template').html());
    this.render();
    // this.loadComposition();
  },
  render: function() {
    var compositionTemplate = this.template(this.model.toJSON());
    this.$el.html(compositionTemplate);
  },
  loadComposition: function() {
    var compositionString = this.model.get('composition');
    var compositionArray = JSON.parse(compositionString);
    App.compositionArray = compositionArray;
  },
  playComposition: function() {
    this.loadComposition();
    controls.play();
  },
  events: {
    'click':'playComposition'
  }
});



// $.ajax({
//        url: '/users',
//        method: 'POST',
//        data: {user_name: userName}
//      }).done(function(res) {
//        var userId = res.id;
//        $.ajax({
//          url:'/users/' + userId + '/compositions',
//          method: 'POST',
//          data: {
//            fx_bank_id: App.currentFXBankID,
//            drum_bank_id: App.currentDrumsBankID,
//            composition: newComposition,
//            name: compName,
//            user_id: userId
//          }
//        });
//      });