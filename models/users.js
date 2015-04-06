"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    user_name: DataTypes.STRING
  }, {

    timestamps: false,

    classMethods: {
      associate: function(models) {
        users.hasMany(models.compositions, {
          foreignKey : "user_id",
          onDelete: "cascade",
          hook: true
        });
      }
    }
  });
  return users;
};