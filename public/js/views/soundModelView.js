App.Views.SoundModelView = Backbone.View.extend({
	className: 'pad',
	initialize: function() {
		console.log('model view created')
		this.template = Handlebars.compile($('#sound-template').html());
		this.render();

	},
	render: function() {
		var padTemplate = this.template(this.model.toJSON());
		this.$el.html(padTemplate);
	},

	loadAudio: function(pad, url) {
	  var request = new XMLHttpRequest();
	  // console.log(pad);
	  request.open('GET', url, true);
	  request.responseType = 'arraybuffer';
	  request.onload = function() {
	    App.context.decodeAudioData(request.response, function(buffer) { 
	      pad.buffer = buffer;
	      console.log(buffer);
	    });
	  }
	  request.send();
	  console.log(request);
	},

	addAudioProperties: function(pad) {
  	// pad.name = pad.id;
  	pad.source = pad.data('sound');
  	console.log(pad.source);
  	this.loadAudio(pad, pad.source);
  		pad.play = function() {
  		  var source = App.context.createBufferSource();
  		  source.buffer = pad.buffer;
  		  source.connect(App.context.destination);
  		  source.start(0);
  		  pad.source = source;
  		}
	},

	// play: function() {
	// 	// Console the id of the pad that was clicked.
	// 	console.log(this.$el.attr('id') + ' pad played');
	// 	var audio = this.$el.find('audio')[0];
	// 	audio.load();
	// 	audio.play();
	// 	this.padStamp();
	// },
	padStamp: function() {
		//Only record the stamps IF App.recordStart is truthy
		if(App.recordStart) {
			var id 		= event.currentTarget.id; 
			var stamp = event.timeStamp - App.recordStart;

			// Pass our timestamp value to the keeper function.
			compositionKeeper.keeper(id, stamp);
		}
	},
	// events: {
	// 	'click': 'play'
	// },
	// newSound = function(url) {
	// 	var audio = new Audio();
	// 	audio.src = url;
	// 	audio.controls = false;
	// },
});