var models = require('./models');
var SoundBank = models.sound_banks;
var Sound = models.sounds;

var sound_banks = [
  {
    name: 'Test Sound Bank',
    sounds: [
      { 
        name: 'mule chant',
        url: 'http://www.lettersnstuff.com/sounds/animals/mule.wav'
      },
      {
        name: 'crowd moan',
        url: 'http://www.burntair.com/wav/CounterStrikeSounds/various/aww.wav'
      },
      {
        name: 'goat whine',
        url: 'http://www.stuffnewspaper.com/sounds/ANIMALS/goat3.wav'
      },
      {
        name: 'race car',
        url: 'http://sep800.mine.nu/files/sounds/racecar%201.wav'
      },
      {
        name: 'baby cry',
        url: 'http://www.crefac.net/wav/baby002.wav'
      },
      {
        name: 'frog',
        url: 'http://www.chiptape.com/chiptape/sounds/medium/frog_att.wav'
      },
      {
        name: 'drum sequence',
        url: 'http://www.users.globalnet.co.uk/~spufus/drums/hard137.wav'
      },
      {
        name: 'Chicken',
        url: 'http://www.davorin.net/d/kura.wav'
      },
      {
        name: 'cow',
        url: 'http://labs.petegoodman.com/ghetto_blaster/_includes/sfx/worms/CowMoo.wav'
      },
      {
        name: 'splash',
        url: 'http://bobbiswavcollection.com/bgsplash.wav'
      },
      {
        name: 'clang',
        url: 'http://www.jibshots.com/multimedia/wrench.wav'
      },
      {
        name: 'burp',
        url: 'http://www.freesoundvault.com/sounds/sound_fx/burp.wav'
      },
      {
        name: 'car crash',
        url: 'http://www.boo.net/~rarnold/firesign/sounds/crash.wav'
      },
      {
        name: 'fart',
        url: 'http://www.darmgas.de/waves/furz025.wav'
      },
      {
        name: 'fart2',
        url: 'http://izzyweird.com/soundlib1/forced01.wav'
      },
      {
        name: 'glass breaking',
      url: 'http://insomniaradio.net/audio/production/<Impacts></Impacts>/Glass%20Shatter%20Light%2002.wav'
      }
    ]
  }
]

var seedDatabase = function () {
  sound_banks.forEach(function (soundBankData) {
    SoundBank
      .create({
        name: soundBankData.name
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