const sequelize = require('sequelize');

const database = new sequelize('flamingle', 'flamingleadm', 'mavizokayaszoka',
{
    dialect: 'mssql', host:'localhost', port: 50753
});

database.sync();

module.exports = database;