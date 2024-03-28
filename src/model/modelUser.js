const sequelize = require('sequelize');
const database = require('../config/db');

const user = database.define('User', {
    IDUser: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Name: {
        type: sequelize.STRING(36),
        allowNull: false,       
    },

    Birth: {
        type: sequelize.DATE,
        allowNull: false,
    },

    CPF: {
        type: sequelize.STRING(11),
        allowNull: false
    },

    Password: {
        type: sequelize.STRING(36),
        allowNull: false
    }
});

module.exports = user;