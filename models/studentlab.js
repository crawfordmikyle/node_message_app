'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentLab = sequelize.define('StudentLab', {
    studentNotes: DataTypes.TEXT
  });
  StudentLab.associate = (models) => {
    StudentLab.belongsTo(models.Student)
    StudentLab.belongsTo(models.Lab)
    StudentLab.hasMany(models.Comment)
  }
  return StudentLab;
};