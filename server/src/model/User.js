const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../assets/sequelize');

class User extends Model {}

User.init(
    {
        name: DataTypes.STRING,
    }, 
    {   sequelize, 
        modelName: 'user' 
    }
);

module.exports = {
  User,
};