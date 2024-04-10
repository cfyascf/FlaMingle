const sequelize = require('sequelize');
const database = require('../config/db');

const user = require('./modelUser');
const bank = require('./modelBank');

const card = database.define('Card', {
    Number: {
        type: sequelize.NUMERIC(15),
        primaryKey: true,
        allowNull: false
    },

    Name: {
        type: sequelize.STRING(50),
        allowNull: false
    },

    CVV: {
        type: sequelize.NUMERIC(3),
        allowNull: false
    },

    VE: {
        type: sequelize.CHAR(4),
        allowNull: false
    },
    
    BankCode: {
        type: sequelize.NUMERIC(3),
        allowNull: false
    },

    UserCPF: {
        type: sequelize.STRING(14),
        allowNull: false
    }
});

card.belongsTo(user, { foreignKey: 'UserCPF', onDelete: 'CASCADE' });
user.hasMany(card, { foreignKey: 'UserCPF', onDelete: 'CASCADE' });

card.belongsTo(bank, { foreignKey: 'BankCode', onDelete: 'CASCADE' });
bank.hasMany(card, { foreignKey: 'BankCode', onDelete: 'CASCADE' });

database.sync()
    .then(() => {
        console.log("data syncd");
    })
    .catch(() => {
        console.error('error');
});

module.exports = card;