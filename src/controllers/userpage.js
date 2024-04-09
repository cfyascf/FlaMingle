const db = require('../config/db');
const sequelize = require('sequelize');
const card = require('../model/modelCard');
const user = require('../model/modelUser');

module.exports = {
    async userpageGet(req, res) {
        const query = 'SELECT * FROM Users WHERE UserCPF = :cpf';
        const parameters = { cpf:  cpf}; 

        const result = await db.query(query, {
            replacements: parameters,
            type: sequelize.QueryTypes.SELECT
        })

        const name = result.Name;
        const birth = result.Birth;
        const email = result.Email;
        const photo = result.Photo;

        res.render('userpage', { cpf, name, birth, email, photo });
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