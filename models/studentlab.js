'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentLab = sequelize.define('StudentLab', {
    studentNotes: DataTypes.TEXT
  });

  StudentLab.associate = (models) => {
    // StudentLab.belongsTo(models.Student,{as: 'student'}),
    StudentLab.belongsTo(models.Lab,{as: 'lab'})
  }

  return StudentLab;
};