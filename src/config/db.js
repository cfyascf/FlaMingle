const sequelize = require('sequelize');

const database = new sequelize('flamingle', 'flamingleadm', 'yaszokamavizoka',
{
    dialect: 'mssql', host:'localhost', port: 59255
});

database.sync();

module.exports = database;