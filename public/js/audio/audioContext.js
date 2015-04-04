// var loader;
// var audioCtx;

  
$(function() {
  //Identifies the html element that will trigger sound
  var button = document.querySelector('button');
  //Creates volume control
  // var gainNode = audioCtx.createGain();
  //Declares an audio context
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  //Audio Sample Loader is a library that helps   load and decode one or more audio samples.  Functions asynchronously.
  loader = new AudioSampleLoader();
  //Connects the loader to it's audio context
  loader.ctx = audioCtx;
  //FIXME -- hardcoded url to id the audio source file
  loader.src = 
  // [ 
  '/audiofiles/mule.wav'
               //  ,
               // '/audio/wrench.wav',
               // '/audio/goat3.wav'
               // ]
    
  button.onclick = function() {
    //Create AudioBufferSourceNode that will play the sound file
    var source = audioCtx.createBufferSource();
    //Connects audio context to destination, ie comp speakers  
    source.connect(audioCtx.destination);
    loader.onload = function() {
      source.buffer = this.response;
      //After a successful decode, the data is  availacle at loader.response as, in our case, an   array of AudioBuffers
      // window.soundsArray = loader.response;
      source.start()
    };
    //Error msg upon failure
    loader.onerror = function() {
      console.log('Decode failed.');
    };
    //Activates the ASL
    loader.send();
  };
  


});