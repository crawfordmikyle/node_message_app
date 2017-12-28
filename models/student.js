'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING
  });

  Student.associate = function(models) {
    Student.hasMany(models.StudentLab,{as: 'studentLabs'})
  }

  return Student;
};