const db = require('../config/db');
const sequelize = require('sequelize');

module.exports = {
    async userpageconvertGet(req, res) {
        res.render('userpageconvert');
    }
}