'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING
  });

  Teacher.associate = (models) => {
    Teacher.hasMany(models.Student,{as: 'students'})
  }

  return Teacher;
};