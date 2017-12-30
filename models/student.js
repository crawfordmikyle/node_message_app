'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING
  });

  return Student;
};