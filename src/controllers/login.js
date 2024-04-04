const db = require('../config/db');
const sequelize = require('sequelize');

module.exports = {
    async loginGet(req, res) {
        res.render('login');
    },

    async loginPost(req, res) {
        const data = req.body;

        const clean_cpf = data.cpf.replace(/[.-]/g, '');

        const query = 'SELECT * FROM Users WHERE CPF = :cpf AND Password = :password';
        const parameters = { cpf: clean_cpf, password: data.password }; 

        const result = await db.query(query, {
            replacements: parameters,
            type: sequelize.QueryTypes.SELECT
        })

        if(result.length > 0) {
            res.redirect('/userpage');
        }

        else {
            res.redirect('/login');
        }
    }
}