const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../assets/sequelize');

const { Data } = require('./Data');

class Playbook extends Model {}

Playbook.init(
    {
        name                : DataTypes.STRING,
    }, 
    {   sequelize, 
        modelName: 'playbook' 
    }
);

Playbook.belongsTo(Data, { as: "pub_train_data" })
Playbook.belongsTo(Data, { as: "pub_test_data" })
Playbook.belongsTo(Data, { as: "int_train_data" })
Playbook.belongsTo(Data, { as: "int_test_data" })

module.exports = {
  Playbook,
};