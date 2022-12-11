require('dotenv').config()
require('./index');
require('./model');

const { sequelize } = require('./assets/sequelize');

const migrate = async () => {
    // await sequelize.sync({force: true});
}

migrate();