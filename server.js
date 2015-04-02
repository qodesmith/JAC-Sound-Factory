var express        = require('express');
var logger				 = require('morgan');
var bodyParser		 = require('body-parser');
var models				 = require('./models');

var SoundBank = models.sound_banks;
var Sound     = models.sounds;

var app       = express()

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

/////////////////
// SOUND BANKS //
/////////////////
app.get('/sound_banks', function (req, res){
	SoundBank
	.findAll({ include: Sound })
	.then(function(soundBanks){
		res.send(soundBanks);
	});
});

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

app.post('/sound_banks', function (req, res) {
	SoundBank
	.create(req.body)
	.then(function(soundBank){
		res.send(soundBank);
	});
});

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
app.get('/sounds', function (req, res) {
	Sound
	.findAll()
	.then(function(sounds){
		res.send(sounds);
	});
});

app.get('/sounds/:id', function (req, res) {
	Sound
	.findOne(req.params.id)
	.then(function (sound){
		res.send(sound);
	});
});

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


app.listen(3000, function(){
	console.log("server runnin on 3000....")
});



