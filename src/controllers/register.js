const db = require('../config/db');
const sequelize = require('sequelize');
const user = require('../model/modelUser');

module.exports = {
    async registerGet(req, res) {
        res.render('registeruser', { cpf });
    },

    async registerPost(req, res) {

        const data = req.body;
        const clean_cpf = data.cpf.replace(/[.-]/g, '');
        cpf = clean_cpf;
        const clean_phone = data.phone.replace(/\s/g, '');
        const clean_birth = data.birth.replace(/\//g, '');
        const formatted_birth = `${clean_birth.substr(4, 4)}-${clean_birth.substr(2, 2)}-${clean_birth.substr(0, 2)}`;

        const birth = data.birth;
        const splitted = birth.split('/');
        const day = parseInt(splitted[0], 10);
        const month = parseInt(splitted[1], 10);
        const year = parseInt(splitted[2], 10);

        const today = new Date();
        const birth_date = new Date(year, month - 1, day);

        let age = today.getFullYear() - birth_date.getFullYear();

        if (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day)) {
            age--;
        }

        const query = 'SELECT * FROM Users WHERE UserCPF = :cpf';
        const parameters = { cpf: clean_cpf }; 

        const result = await db.query(query, {
            replacements: parameters,
            type: sequelize.QueryTypes.SELECT
        })

        if(result.length > 0 || age < 18) {
            return res.render('registeruser', { cpf }); 
        }
           
        else {
            const name = data.name;
            const email = data.email;
            let photo = 'public\\img\\usuario.png';

            await user.create ({
                UserCPF: clean_cpf,
                Name: name,
                Birth: formatted_birth,
                Email: email,
                Phone: clean_phone,
                Password: data.password,
                Photo: photo
            });
            return res.render('userpage', { cpf, name, formatted_birth, email, photo });
        }

    },
}