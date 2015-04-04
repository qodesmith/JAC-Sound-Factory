"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("compositions", {
    	id: {
    		allowNull: false,
    		autoIncrement: true,
    		primaryKey: true,
    		type: DataTypes.INTEGER
    	},
    	fx_bank_id: {
    		type: DataTypes.INTEGER
    	},
    	drum_bank_id: {
    		type: DataTypes.INTEGER
    	},
    	composition: {
    		type: DataTypes.TEXT
    	},
    	name: {
    		type: DataTypes.STRING
    	},
    	user_id: {
    		type: DataTypes.INTEGER
    	}
    }).done(done)
  },

  down: function(migration, DataTypes, done) {
  	migration.dropTable("composition").done(done);
  }
};
