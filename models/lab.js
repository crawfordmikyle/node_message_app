'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lab = sequelize.define('Lab', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  });

  Lab.associate = (models) => {
    Lab.belongsTo(models.Student,{as: 'student'});
  }

  return Lab;
};