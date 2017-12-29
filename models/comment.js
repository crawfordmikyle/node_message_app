'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT
  });

  return Comment;
};
