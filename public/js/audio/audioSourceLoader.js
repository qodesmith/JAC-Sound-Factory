//Audio Sample Loader is a library that helps load and decode one or more audio samples. Functions asynchronously.
var loader = new AudioSampleLoader();

//FIXME -- the url to our files is currently hardcoded 
loader.src = 'sound_banks/1/sounds';

//FIXME -- link the loader to the context, once created
loader.ctx = audioCtx;

//After a successful decode, the data is availalbe at loader.response as, in our case, an array of AudioBuffers
loader.onload = function() {
  window.soundsArray = loader.response;
  console.log('ASL onload complete:');
};

//Error msg upon failure
loader.onerror = function() {
  console.log('Decode failed.');
};

//Activates the ASL
loader.send();


