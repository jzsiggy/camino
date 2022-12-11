const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../assets/sequelize');

const { Playbook } = require('./Playbook');
const { User } = require('./User');

class Submission extends Model {}

Submission.init(
    {  }, 
    {   sequelize, 
        modelName: 'submission' 
    }
);

Submission.belongsTo(User)
Submission.belongsTo(Playbook)

module.exports = {
  Submission,
};