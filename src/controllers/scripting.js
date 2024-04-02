const db = require('../config/db');
const sequelize = require('sequelize');

const query = `CREATE TABLE User ()`;

const result = db.query(query, {
    type: sequelize.QueryTypes.RAW
})