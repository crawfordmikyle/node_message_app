'use strict';
module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    note: DataTypes.TEXT
  });

  return Note;
};
