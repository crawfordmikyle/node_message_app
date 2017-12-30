'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lab = sequelize.define('Lab', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  });

  return Lab;
};