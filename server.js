var express        = require('express');
var logger				 = require('morgan');
var bodyParser		 = require('body-parser');
var models				 = require('./models');

var SoundBank    = models.sound_banks;
var Sound        = models.sounds;
var User 			   = models.users;
var Composition  = models.compositions; 

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

// Get all Users data and includes the Compositions
app.get('/users', function (req, res) {
	User
	.findAll({include : Composition})
	.then(function(users){
		res.send(users);
	});
});

// Get one User based on the id and 
// include the Composition related to that User
app.get('/users/:id', function (req, res) {
	User
	.findOne({
		where : req.params.id,
		include: Composition
	})
	.then(function(user){
		res.send(user);
	});
});

//creates a new user
app.post('users', function (req, res) {
	User
	.create(req.body)
	.then(function(createdUser){
		res.send(createdUser);
	});
});

//edits a users info of a specific User
app.put('users/:id', function (req, res){
	User
	.findOne(req.params.id)
	.then(function(user){
		user
		.update(req.body)
		.then(function(updatedUser){
			res.send(updatedUser);
		});
	});
});

//delete a specific user
app.delete('users/:id', function (req, res){
	User
	.findOne(req.params.id)
	.then(function(user){
		user
		.destroy()
		.then(function(destroyedUser){
			res.send(destroyedUser);
		})
	});
});

app.get('/compositons', function (req, res) {
	Composition
	.findAll()
	.then(function(compositons){
		res.send(compositons);
	});
});

//find a composition by id 
app.get('/compositons/:id', function (req, res) {
	Composition
	.findOne(req.params.id)
	.then(function(compositon){
		res.send(compositon);
	});
});

//creates a new composition in a specific User
app.post('users/:id/compositons', function (req, res) {
	var usersId = req.params.id;
	var compositonData = req.body;

	User
	.findOne(usersId)
	.then(function(user){
		Composition
		.create(compositonData)
		.then(function(createdComp){
			User.addComposition(createdComp)
			res.send(createdComp);
		});
	});
});

// updates a current compositions info
app.put('/compostions/:id', function (req, res){
	Composition
	.findOne(req.params.id)
	.then(function(composition){
		composition
		.update(req.body)
		.then(function(updatedComp){
			res.send(updatedComp);
		});
	});
});

//deletes a compositionx`
app.delete('/compositions/:id', function (req, res) {
	Composition
	.findOne(req.params.id)
	.then(function(composition){
		composition
		.destroy()
		.then(function(destroyedComp){
			res.send(destroyedComp);
		});
	});
});





app.listen(3000, function(){
	console.log("server runnin on 3000....")
});



