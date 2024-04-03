const db = require('../config/db');
const sequelize = require('sequelize');

const warning = {message: "Usuário não encontrado", code: 202};

module.exports = {
    async loginGet(req, res) {
        res.render('login', { warning: '' });
    },

    async loginPost(req, res) {
        const data = req.body;

        const query = 'SELECT * FROM Users WHERE CPF = :cpf AND Password = :password';
        const parameters = { cpf: data.cpf, password: data.password }; 

        const result = await db.query(query, {
            replacements: parameters,
            type: sequelize.QueryTypes.SELECT
        })

        if(result.length > 0) {
            res.redirect('/userpageconvert');
        }

        else {
            res.render('login', { warning: '' });
        }
    }
}