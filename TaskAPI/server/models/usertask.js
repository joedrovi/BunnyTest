'use strict';
module.exports = (sequelize, DataTypes) => {
  const userTask = sequelize.define('userTask', {
    description: DataTypes.TEXT,
    state: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
  }, {});
  userTask.associate = function(models) {
    // associations can be defined here
  };
  return userTask;
};