const sequelize = require('sequelize');
const database = require('../config/db');

const bank = database.define('Bank', {
    Code: {
        type: sequelize.NUMERIC(3),
        primaryKey: true,
        allowNull: false
    },
    
    Name: {
        type: sequelize.STRING(36),
        allowNull: false
    },

    File_path: {
        type: sequelize.STRING(250)
    }
});

module.exports = bank;