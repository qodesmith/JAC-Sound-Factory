App.Views.SoundModelView = Backbone.View.extend({
	className: 'pad',
	initialize: function() {
		this.template = Handlebars.compile($('#sound-template').html());
		this.render();
		this.addAudioProperties(this.el);
		this.$el.click(function() {
			this.play();
		});
	},
	render: function() {
		var padTemplate = this.template(this.model.toJSON());
		this.$el.html(padTemplate);
	},
	loadAudio: function(pad, url) {
	  var request = new XMLHttpRequest();
	  request.open('GET', url, true);
	  request.responseType = 'arraybuffer';
	  request.onload = function() {
	    App.context.decodeAudioData(request.response, function(buffer) { 
	    	pad.buffer = buffer;
	    	canvas = $("#visual")[0];
				ctx = canvas.getContext('2d');
	    });
	  }
	  request.send();
	},
	addAudioProperties: function(pad) {
  	pad.source = $(pad).find('.pad-name').data('sound');
  	this.loadAudio(pad, pad.source);
  	pad.play = function() {
  		if(App.recordStart) {
				var id = pad.id;
				var stamp = event.timeStamp - App.recordStart;
				// Pass our timestamp value to the keeper function.
				compositionKeeper.keeper(id, stamp);
			}
  	  var source = App.context.createBufferSource();
  	  source.buffer = pad.buffer;
  	  source.connect(App.context.destination);
  	  analyser = App.context.createAnalyser();
  		source.connect(analyser);
  	  analyser.connect(App.context.destination);
  	  source.start(0);
  	  pad.source = source;
  		frameLooper();
  	},
  	pad.stop = function() {
  		if(pad.source) { pad.source.stop();
 		 	}
 		}
	},
});