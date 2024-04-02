const db = require('../config/db');
const sequelize = require('sequelize');

module.exports = {
    async userpageGet(res, req) {
        res.render('userpageconvert');
    }
}