//Declares an audio context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//Buffer will have two channels @ 44100 sample rate & lasts 0.5 sec
var arrayBuffer = audioCtx.createbuffer(2, 22500, 44100);
var el = document.querySelector('.test');

button.onclick = function() {
  
}