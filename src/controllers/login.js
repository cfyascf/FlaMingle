const db = require('../config/db');
const sequelize = require('sequelize');

global.cpf = '';
global.db_name = '';
global.birth = '';
global.email = '';
global.photo = '';

warning = '';

module.exports = {
    async loginGet(req, res) {
        res.render('login', { cpf, warning: warning });
    },

    async loginPost(req, res) {
        warning = 'CPF não registrado!';
        try {
            const data = req.body;
            cpf = data.cpf;
            
            clean_cpf = data.cpf.replace(/[.-]/g, '');

            const query = 'SELECT * FROM Users WHERE UserCPF = :cpf AND Password = :password';
            const parameters = { cpf: clean_cpf, password: data.password }; 

            const result = await db.query(query, {
                replacements: parameters,
                type: sequelize.QueryTypes.SELECT
            })

            console.log(result);

            if (result.length > 0) {
                db_name = result[0].Name;

                const bbirth = result[0].Birth;
                var birthDate = new Date(bbirth);
                var day = birthDate.getDate();
                var month = birthDate.getMonth() + 1;
                var year = birthDate.getFullYear();
                if (day < 10) {
                    day = "0" + day;
                }
                if (month < 10) {
                    month = "0" + month;
                }
                birth = day + "/" + month + "/" + year;

                email = result[0].Email;
                photo = result[0].Photo;

                return res.render('userpage', { cpf, db_name, birth, email, photo });
            } else {
                return res.render('login', { warning: warning });
            }
        } catch (error) {
            console.error('Erro:', error);
            res.status(500).send('Erro interno');
        }
    }
}
