var models = require('./models');
var SoundBank = models.sound_banks;
var Sound = models.sounds;
var baseURL = '/audiofiles'

var soundBanks = [
  {
    name: '70\'s Drum Kit',
    type: 'drums',
    sounds: [
      { 
        name: 'Crash',
        url: baseURL + '/70sKit/Crash.wav'
      },
      { 
        name: 'High Tom',
        url: baseURL + '/70sKit/High%20Tom.wav'
      },
      { 
        name: 'Medium Tom',
        url: baseURL + '/70sKit/Medium%20Tom.wav'
      },
      { 
        name: 'Low Tom',
        url: baseURL + '/70sKit/Floor%20Tom.wav'
      },
      { 
        name: 'Kick',
        url: baseURL + '/70sKit/Kick.wav'
      },
      { 
        name: 'Snare',
        url: baseURL + '/70sKit/Snare.wav'
      },
      { 
        name: 'High Hat',
        url: baseURL + '/70sKit/High%20Hat.wav'
      },
      { 
        name: 'Ride',
        url: baseURL + '/70sKit/Ride.wav'
      }
    ]
  },
  {
    name: '808 kit',
    type: 'drums',
    sounds: [
      {
        name: 'Claps',
        url: baseURL + '/808kit/Claps.wav'
      },
      {
        name: 'Clave',
        url: baseURL + '/808kit/Clave.wav'
      },
      {
        name: 'Cow Bell',
        url: baseURL + '/808kit/Cow%20Bell.wav'
      },
      {
        name: 'High Hat',
        url: baseURL + '/808kit/High%20Hat.wav'
      },
      {
        name: 'Kick',
        url: baseURL + '/808kit/Kick.wav'
      },
      {
        name: 'Snare',
        url: baseURL + '/808kit/Snare.wav'
      },
      {
        name: 'Rim',
        url: baseURL + '/808kit/Rim.wav'
      },
      {
        name: 'Shaker',
        url: baseURL + '/808kit/Shaker.wav'
      }
    ]
  },
  {
    name: 'Barnyard',
    type: 'fx',
    sounds: [
      {
        name: 'Chicken',
        url: baseURL + '/Barnyard/chicken.wav'
      },
      {
        name: 'Cow 1',
        url: baseURL + '/Barnyard/Cow1.wav'
      },
      {
        name: 'Cow2',
        url: baseURL + '/Barnyard/Cow2.wav'
      },
      {
        name: 'Goat 1',
        url: baseURL + '/Barnyard/Goat1.wav'
      },
      {
        name: 'Goat 2',
        url: baseURL + '/Barnyard/Goat2.wav'
      },
      {
        name: 'Pig Grunt',
        url: baseURL + '/Barnyard/Pig%20Grunt.wav'
      },
      {
        name: 'Pig Squeal',
        url: baseURL + '/Barnyard/Pig%20Squeal.wav'
      },
      {
        name: 'Rooster',
        url: baseURL + '/Barnyard/Rooster.wav'
      }
    ]
  },
  {
    name: 'Bathroom',
    type: 'fx',
    sounds: [
      {
        name: 'Belch 1',
        url: baseURL + '/Bathroom/Belch1.wav'
      },
      {
        name: 'Belch 2',
        url: baseURL + '/Bathroom/Belch2.wav'
      },
      {
        name: 'Fart 1',
        url: baseURL + '/Bathroom/Fart1.wav'
      },
      {
        name: 'Fart 2',
        url: baseURL + '/Bathroom/Fart2.wav'
      },
      {
        name: 'Toilet Fart 1',
        url: baseURL + '/Bathroom/Toilet%20Fart1.wav'
      },
      {
        name: 'Toilet Fart 2',
        url: baseURL + '/Bathroom/Toilet%20Fart2.wav'
      },
      {
        name: 'Toilet Flush',
        url: baseURL + '/Bathroom/Toilet.wav'
      },
      {
        name: 'Splash Plop',
        url: baseURL + '/Bathroom/Splash.wav'
      }
    ]
  },
  {
    name: 'Dance Kit',
    type: 'drums',
    sounds: [
      {
        name: 'Crash',
        url: baseURL + '/DanceKit/Crash.wav'
      },
      {
        name: 'FX Thing',
        url: baseURL + '/DanceKit/FXD%20thing.wav'
      },
      {
        name: 'Lazer',
        url: baseURL + '/DanceKit/Lazer.wav'
      },
      {
        name: 'Yea',
        url: baseURL + '/DanceKit/Yea.wav'
      },
      {
        name: 'Kick',
        url: baseURL + '/DanceKit/Kick.wav'
      },
      {
        name: 'Snare (short)',
        url: baseURL + '/DanceKit/Snare%20(short).wav'
      },
      {
        name: 'Snare (long)',
        url: baseURL + '/DanceKit/Snare%20(long).wav'
      },
      {
        name: 'Open HH',
        url: baseURL + '/DanceKit/Open%20hh.wav'
      }
    ]
  },
  {
    name: 'Tools',
    type: 'fx',
    sounds: [
      {
        name: 'Air Drill',
        url: baseURL + '/Tools/Air%20Drill.wav'
      },
      {
        name: 'Chainsaw',
        url: baseURL + '/Tools/Chainsaw.wav'
      },
      {
        name: 'Drill',
        url: baseURL + '/Tools/Drill.wav'
      },
      {
        name: 'Electric Motor',
        url: baseURL + '/Tools/Electric%20Motor.wav'
      },
      {
        name: 'Grinding',
        url: baseURL + '/Tools/Grinding.wav'
      },
      {
        name: 'Hand Saw',
        url: baseURL + '/Tools/Hand%20Saw.wav'
      },
      {
        name: 'Jack Hammer',
        url: baseURL + '/Tools/Jack%20Hammer.wav'
      },
      {
        name: 'Sander',
        url: baseURL + '/Tools/Sander.wav'
      }
    ]
  },
  {
    name: 'Weapons',
    type: 'fx',
    sounds: [
      {
        name: 'AK47',
        url: baseURL + '/Weapons/AK47.wav'
      },
      {
        name: 'Explosion',
        url: baseURL + '/Weapons/Explosion.wav'
      },
      {
        name: 'Loaded Gun',
        url: baseURL + '/Weapons/Gun%20Loaded.wav'
      },
      {
        name: 'Gunshot 1',
        url: baseURL + '/Weapons/Gunshot1.wav'
      },
      {
        name: 'Gunshot 2',
        url: baseURL + '/Weapons/Gunshot2.wav'
      },
      {
        name: 'Gunshot 3',
        url: baseURL + '/Weapons/Gunshot3.wav'
      },
      {
        name: 'Shank',
        url: baseURL + '/Weapons/Shank.wav'
      },
      {
        name: 'Shank 2',
        url: baseURL + '/Weapons/Shank2.wav'
      }
    ]
  },
]

var seedDatabase = function () {
  soundBanks.forEach(function (soundBankData) {
    SoundBank
      .create({
        name: soundBankData.name,
        type: soundBankData.type
      })
      .then(function(soundBank) {
        soundBankData.sounds.forEach(function (soundsData) {
          Sound
            .create({
              name: soundsData.name,
              url: soundsData.url,
              sb_id: soundBank.id
            });
        });
      });
  });
}

SoundBank.destroy({ truncate: true }).then(function() {
  Sound.destroy({ truncate: true }).then(function() {
    seedDatabase();
  });
});