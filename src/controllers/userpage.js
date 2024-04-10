const db = require('../config/db');
const sequelize = require('sequelize');
const card = require('../model/modelCard');
const user = require('../model/modelUser');

global.message = '';

module.exports = {
    async userpageGet(req, res) {
        res.render('userpage', { cpf, db_name, birth, email, photo });
    },

    async userpageconvertGet(req, res) {
        res.render('userpageconvert', { cpf, db_name, birth, email, photo });
    },

    async userpagewalletGet(req, res) {
        const clean_cpf = cpf.replace(/[.-]/g, '');
        const query = 'SELECT c.Number, c.Name, c.VE, b.File_path FROM Cards c INNER JOIN Banks b ON b.Code = c.BankCode WHERE c.UserCPF = :cpf';
        const parameters = { cpf: clean_cpf }; 

        const result = await db.query(query, {
            replacements: parameters,
            type: sequelize.QueryTypes.SELECT
        });

        if(result.length == 0) {
            message = 'Você ainda não possui cartões cadastrados!';
        }

        console.log(result);

        res.render('userpagewallet', { cpf, db_name, birth, email, photo, cards: result, message });
    },

    async userwalletPost(req, res) {
        const data = req.body;
        console.log(data);
        const clean_cpf = cpf.replace(/[.-]/g, '');
        const clean_expdate = data.expdate.replace(/\//g, '');

        await card.create ({
            Number: data.cardnumber,
            Name: data.name,
            CVV: data.cvv,
            VE: clean_expdate,
            BankCode: data.bankcode,
            UserCPF: clean_cpf,
        });

        const query = 'SELECT c.Number, c.Name, c.VE, b.File_path FROM Cards c INNER JOIN Banks b ON b.Code = c.BankCode WHERE c.UserCPF = :cpf';
        const parameters = { cpf: clean_cpf }; 

        const result = await db.query(query, {
            replacements: parameters,
            type: sequelize.QueryTypes.SELECT
        });

        message = '';

        return res.render('userpagewallet', { cpf, db_name, birth, email, photo, cards: result, message });
    }
}