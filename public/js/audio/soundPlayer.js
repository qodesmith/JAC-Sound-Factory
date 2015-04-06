var context = new AudioContext();

var loadAudio = function(pad, url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) { 
      pad.buffer = buffer;
    });
  }
  request.send();
}

var addAudioProperties = function(pad) {
  pad.name = pad.id;
  pad.source = $(pad).data('sound');

  loadAudio(pad, pad.source);
  pad.play = function() {
    var source = context.createBufferSource();
    source.buffer = pad.buffer;
    source.connect(context.destination);
    source.start(0);
    pad.source = source;
  }
}

$(function() {
  setTimeout(function() {
    $('#test div').each(function() {
      addAudioProperties(this);
    });
    $('#test div').click(function() {
      this.play();
    });
  }, 1000);
});

