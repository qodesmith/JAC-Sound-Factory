// URL can be found in server.js.
// Using the alphacoders API: http://wall.alphacoders.com/api.php

// Pull a list of backgrounds.
var getBackground = function() {
	$.ajax({
		url: '/background',
		method: 'GET'
	})
	.done(randomBackground);
};

// Set a random body background.
var randomBackground = function(images) {
	var length = images.length;
	var randomNum = Math.floor(Math.random() * (length + 1));
	var randomIMG = images[randomNum].url;
	$('body').css({'background':'url(' + randomIMG + ') no-repeat center center fixed',
								'background-size':'cover'});
}