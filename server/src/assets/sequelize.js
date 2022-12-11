const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.SEQUELIZE_DB_NAME, 
  process.env.SEQUELIZE_DB_USER, 
  process.env.SEQUELIZE_DB_PASSWORD, 
  {
    host: process.env.SEQUELIZE_DB_HOST,
    dialect: 'mysql',
  }
);

const sequelizeConnect = () => {
  sequelize.authenticate()
  .then(response => console.log('Connected to sequelize DB'))
  .catch(err => console.log('Error connecting to sequelize DB\n', err));
}

module.exports = {
  sequelize,
  sequelizeConnect
}