const sequelize = require('sequelize');
const database = require('../config/db');

const user = database.define('User', {
    UserCPF: {
        type: sequelize.STRING(14),
        primaryKey: true,
        allowNull: false
    },

    Name: {
        type: sequelize.STRING(36),
        allowNull: false,       
    },

    Birth: {
        type: sequelize.DATE,
        allowNull: false,
    },

    Email: {
        type: sequelize.STRING(36),
        allowNull: false
    },

    Phone: {
        type: sequelize.STRING(14),
        allowNull: false
    },

    Password: {
        type: sequelize.STRING(36),
        allowNull: false
    },

    Photo: {
        type: sequelize.STRING(50),
        allowNull: false
    }
});

module.exports = user;