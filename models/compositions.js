"use strict";

module.exports = function(sequelize, DataTypes){
	var compositions = sequelize.define("compositions", {
			fx_bank_id: DataTypes.INTEGER,
			drum_bank_id: DataTypes.INTEGER,
			composition: DataTypes.TEXT,
			name: DataTypes.STRING,
			user_id: DataTypes.INTEGER
	}, {

		timestamps: false,

		classMethods: {
			associate: function(models){
				compositions.belongsTo(models.users, {
					foreignKey: "user_id"
				});
			}
		}
	});
	return compositions
};