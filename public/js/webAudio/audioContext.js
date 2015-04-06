// The world our audio lives in
var audioCtx = new AudioContext;

// Our final output
audioCtx.destination

// Used to decode audio file data
// from an XMLHttpRequest
audioCtx.decodeAudioData(audioData)
	.then(function(decodedData) {
		// some stuff
	});