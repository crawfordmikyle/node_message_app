'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    title: DataTypes.STRING,
    comment: DataTypes.TEXT
  });
  
  return Comment;
};
