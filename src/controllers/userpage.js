const db = require('../config/db');
const sequelize = require('sequelize');
const card = require('../model/modelCard');


module.exports = {
    async userpageGet(req, res) {
        res.render('userpage');
    },

    async userpageconvertGet(req, res) {
        res.render('userpageconvert');
    },

    async userpagewalletGet(req, res) {
        res.render('userpagewallet');
    },

    async userwalletPost(req, res) {
        const data = req.body;

        const clean_cpf = data.cpf.replace(/[.-]/g, '');
        const clean_validity = data.validity.replace(/\//g, '');
        const formatted_validity = `${clean_validity.substr(4, 4)}-${clean_validity.substr(2, 2)}`;

        await card.create ({
            Number: data.numbercard,
            Name: data.name,
            CVV: data.cvv,
            VE: data.formatted_validity,
            UserCPF: clean_cpf,
        });
        return res.redirect('/userpagewallet');
    }
}