const db = require('../config/db');
const sequelize = require('sequelize');
const user = require('../model/modelUser');

global.db_name = '';
global.birth = '';
global.email = '';
global.photo = '';
global.phone = '';

warning = [
    {error: 'age', description: 'Idade mínima requerida não condizente!'},
    {error: 'cpf', description: 'CPF Inválido!'}
]

module.exports = {
    async registerGet(req, res) {
        console.log(db_name, birth, email, phone);
        res.render('registeruser', { cpf });
    },

    async registerPost(req, res) {
        try {
            const data = req.body;
            db_name = data.name;
            email = data.email;
            cpf = data.cpf;
            phone = data.phone;
            
            const formatted_birth = formatDate(data.birth);

            const age = calcAge(data.birth);

            const clean_cpf = data.cpf.replace(/[.-]/g, '');
            const result = await user.findOne({ where: { UserCPF: clean_cpf } });

            if (result || age < 18 || data.birth.length < 10 || data.phone.length < 14) {
                return res.render('registeruser', { cpf });
            } else {
                photo = '../img/usuario.png';

                await user.create({
                    UserCPF: clean_cpf,
                    Name: db_name,
                    Birth: formatted_birth,
                    Email: email,
                    Phone: phone,
                    Password: data.password,
                    Photo: photo
                });

                return res.render('userpage', { cpf, db_name, birth, email, photo });
            }
        } catch (error) {
            console.error('Erro:', error);
            res.status(500).send('Erro interno');
        }
    },
}

function formatDate(data) {
    const splitted = data.split('/');
    const day = parseInt(splitted[0], 10);
    const month = parseInt(splitted[1], 10);
    const year = parseInt(splitted[2], 10);
    return `${year}-${month}-${day}`;
}

function calcAge(data) {
    const splitted = data.split('/');
    const day = parseInt(splitted[0], 10);
    const month = parseInt(splitted[1], 10);
    const year = parseInt(splitted[2], 10);
    const today = new Date();
    const birth_date = new Date(year, month - 1, day);

    let age = today.getFullYear() - birth_date.getFullYear();

    if (today.getMonth() < month - 1 || (today.getMonth() === month - 1 && today.getDate() < day)) {
        age--;
    }

    return age;
}
