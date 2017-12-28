'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lab = sequelize.define('Lab', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Lab.belongsTo(models.Student)
      }
    }
  });
  return Lab;
};