'use strict';
module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  });
  
  return Note;
};