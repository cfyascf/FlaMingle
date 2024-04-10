const sequelize = require('sequelize');

const database = new sequelize('flamingle', 'root', '123456',
{
    dialect: 'mysql', host:'localhost', port: 3306
});

database.sync();

module.exports = database;