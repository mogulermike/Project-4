'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.City, { foreignKey: 'currentCity' })
    User.hasMany(models.Post, { foreignKey: 'userId' })
  };
  return User;
};