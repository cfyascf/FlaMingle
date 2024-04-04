const db = require('../config/db');
const sequelize = require('sequelize');

module.exports = {
    async userpageGet(req, res) {
        res.render('userpage');
    },

    async userpagewalletGet(req, res) {
        res.render('userpagewallet');
    },

    async userpageconvertGet(req, res) {
        res.render('userpageconvert');
    }
}