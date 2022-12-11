const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../assets/sequelize');

const { Playbook } = require('./playbook');

class Metric extends Model {}

Metric.init(
    {
        name : DataTypes.STRING,
    }, 
    {   sequelize, 
        modelName: 'metric' 
    }
);

Metric.belongsToMany(Playbook, { through : 'playbook_metric' });

module.exports = {
  Metric,
};