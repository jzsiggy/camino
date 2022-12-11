const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('../assets/sequelize');

const { Submission } = require('./Submission');
const { Metric } = require('./metric');

class SubmissionMetric extends Model {}

SubmissionMetric.init(
    { 
        score: DataTypes.INTEGER
    }, 
    {   sequelize, 
        modelName: 'submission_metric' 
    }
);

SubmissionMetric.belongsTo(Submission)
SubmissionMetric.belongsTo(Metric)

module.exports = {
  SubmissionMetric,
};