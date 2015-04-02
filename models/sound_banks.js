"use strict";
module.exports = function(sequelize, DataTypes) {
  var sound_banks = sequelize.define("sound_banks", {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        sound_banks.hasMany(models.sounds, {
          foreignKey : "sb_id",
          onDelete: "cascade",
          hook: true
        });
      }
    }
  });
  return sound_banks;
};