var express        = require('express');
var logger				 = require('morgan');
var bodyParser		 = require('body-parser');
var models				 = require('./models');
var request				 = require('request');

var SoundBank = models.sound_banks;
var Sound     = models.sounds;

var app       = express()

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

/////////////////
// SOUND BANKS //
/////////////////

// Get all banks
app.get('/sound_banks', function (req, res){
	SoundBank
	.findAll({ include: Sound })
	.then(function(soundBanks){
		res.send(soundBanks);
	});
});

// Get single bank
app.get('/sound_banks/:id', function (req, res){
	SoundBank
	.findOne({
		where: {id: req.params.id},
		include: Sound
	})
	.then(function(soundBank){
		res.send(soundBank);
	});
});

// Create new bank
app.post('/sound_banks', function (req, res) {
	SoundBank
	.create(req.body)
	.then(function(soundBank){
		res.send(soundBank);
	});
});

// Edit bank
app.put('/sound_banks/:id', function (req, res) {
	SoundBank
	.findOne(req.params.id)
	.then(function(soundBank){
		soundBank
		.update(req.body)
		.then(function(updatedSoundBank){
			res.send(updatedSoundBank)
		});
	});
});

// Delete bank
app.delete('sound_banks/:id', function (req, res) {
	SoundBank
	.findOne(req.params.id)
	.then(function(soundBank){
		soundBank
		.destroy()
		.then(function(destroyedSoundBank){
			res.send(destroyedSoundBank)
		});
	});
});

////////////
// SOUNDS //
////////////

// Find ALL sounds
app.get('/sounds', function (req, res) {
	Sound
	.findAll()
	.then(function(sounds){
		res.send(sounds);
	});
});

// Find sounds in one bank
app.get('/sound_banks/:id/sounds', function (req, res) {
	SoundBank
		.findOne({
			where: {id: req.params.id},
			include: Sound
		}).then(function(bank) {
			res.send(bank.sounds)
		});
});

// Find sounds in ONE bank by NAME (not ID)
// This will be used to populate the pads
// as a default set on page load.
// app.get('/sound_banks/:name/sounds', function (req, res) {
// 	SoundBank
// 		.findOne({
// 			where: {name: req.params.name},
// 			include: Sound
// 		}).then(function(bank) {
// 			res.send(bank.sounds)
// 		});
// });

// Find single sound
app.get('/sounds/:id', function (req, res) {
	Sound
	.findOne(req.params.id)
	.then(function (sound){
		res.send(sound);
	});
});

// Create new sound
app.post('/sound_banks/:id/sounds', function (req, res){
	var soundBankId = req.params.id;
	var soundData = req.body;

	SoundBank
	.findOne(soundBankId)
	.then(function(soundBank){
		Sound
		.create(soundData)
		.then(function(newSound){
			soundBank.addSound(newSound)
			res.send(newSound);
		});
	});
});

// Edit sound
app.put('/sounds/:id', function (req, res) {
	Sound
	.findOne(req.params.id)
	.then(function(sound){
		sound
		.update(req.body)
		.then(function(updatedSound){
			res.send(updatedSound);
		});
	});
});

// Delete sound
app.delete('/sounds/:id', function (req, res) {
	Sound
	.findOne(req.params.id)
	.then(function(sound){
		sound
		.destroy()
		.then(function(destroyedSound){
			res.send(destroyedSound);
		});
	});
});

////////////////
//   Random		//
// Background //
////////////////



app.get('/background', function (req, res) {
	request({
		uri: 'http://wall.alphacoders.com/api1.0/get.php',
		method: 'GET',
		qs: {
			auth: '40079bd1ac47a2574d1ddaa507b1c881',
			width: '1920',
			height:'1080',
			category_id: '23' // pattern category
		},
		json: true
	}, function(error, response, body){
		res.send(body.wallpapers);
	});
});

app.listen(3000, function(){
	console.log("server runnin on 3000....")
});



