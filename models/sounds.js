"use strict";

module.exports = function(sequelize, DataTypes){
	var sounds = sequelize.define("sounds", {
			name: DataTypes.STRING,
			url: DataTypes.STRING,
			sb_id: DataTypes.INTEGER
	}, {

		timestamps: false,

		classMethods: {
			associate: function(models){
				sounds.belongsTo(models.sound_banks, {
					foreignKey: "sb_id"
				});
			}
		}
	});
	return sounds
};