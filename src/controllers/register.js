const db = require('../config/db');
const sequelize = require('sequelize');
const user = require('../model/modelUser');

module.exports = {
    async registerGet(req, res) {
        res.render('registeruser');
    },

    async registerPost(req, res) {
        const data = req.body;

        const cpf = data.cpf;
        const query = 'SELECT * FROM Users WHERE CPF = :cpf';
        const parameters = { cpf: cpf }; 
        let found = false;

        const result = await db.query(query, {
            replacements: parameters,
            type: sequelize.QueryTypes.SELECT
        })

        if(result.length > 0) {
            found = true;
            console.log("user existe vei");
            res.redirect('/');
        }    
        else {
            await user.create ({
                CPF: data.cpf,
                Name: data.name,
                Birth: data.birth,
                Email: data.email,
                Phone: data.phone,
                Password: data.password
            });
            console.log("user criado vei");
            res.redirect('/');
        }

    },
}