const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../assets/sequelize');

class Data extends Model {}

Data.init(
    {
        name: DataTypes.STRING, 
        key : DataTypes.STRING,
    }, 
    {   sequelize, 
        modelName: 'data' 
    }
);

module.exports = {
  Data,
};