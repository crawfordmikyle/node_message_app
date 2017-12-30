'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentLab = sequelize.define('StudentLab', {
    studentNotes: DataTypes.TEXT
  });
  
  StudentLab.associate = (models) => {
    StudentLab.hasOne(models.Note)
    StudentLab.hasMany(models.Comment)
  }
  return StudentLab;
};