'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lab = sequelize.define('Lab', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  Lab.associate = (models) => {
    Lab.hasMany(models.StudentLab)
  }

  return Lab;
};