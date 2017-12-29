'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentLab = sequelize.define('StudentLab', {
    studentNotes: DataTypes.TEXT
  });
  
  return StudentLab;
};