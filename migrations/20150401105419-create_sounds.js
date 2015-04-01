"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
   migration.createTable("sounds", {
   		id: {
   			allowNull: false,
   			autoIncrement: true,
   			primaryKey: true,
   			type: DataTypes.INTEGER
   		},
   		name: {
   			type: DataTypes.STRING
   		},
   		url: {
   			type: DataTypes.STRING
   		},
   		sb_id: {
   			type: DataTypes.INTEGER
   		}

   }).done(done)
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable("sounds").done(done)
  }
};
