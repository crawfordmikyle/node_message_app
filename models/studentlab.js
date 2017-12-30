'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentLab = sequelize.define('StudentLab', {});
  
  StudentLab.associate = (models) => {
    StudentLab.hasOne(models.Note)
    StudentLab.hasMany(models.Comment)
    StudentLab.belongsTo(models.Student)
    StudentLab.belongsTo(models.Lab)
  }
  return StudentLab;
};