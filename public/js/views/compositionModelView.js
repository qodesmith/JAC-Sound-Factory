App.Views.CompositionModelView = Backbone.View.extend({
  className: 'composition',
  initialize: function() {
    this.template = Handlebars.compile($('#composition-template').html());
    this.render();
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