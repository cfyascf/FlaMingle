const db = require('../config/db');
const sequelize = require('sequelize');
const user = require('../model/modelUser');

global.db_name = '';
global.birth = '';
global.email = '';
global.photo = '';
global.phone = '';

warning = '';

module.exports = {
    async registerGet(req, res) {
        console.log(db_name, birth, email, phone);
        res.render('registeruser', { cpf, warning: warning });
    },
    
    async registerPost(req, res) {
        warning = [
            {error: 'age', description: 'Idade mínima requerida não condizente!'},
            {error: 'cpf', description: 'CPF Inválido!'},
            {error: 'existingAccount', description: 'CPF Já registrado!'},
            {error: 'invalidBirth', description: 'Data de nascimento inválida!'},
            {error: 'invalidPhone', description: 'Telefone inválido!'}
        ];

        try {
            const data = req.body;
            db_name = data.name;
            email = data.email;
            cpf = data.cpf;
            phone = data.phone;
            
            const formatted_birth = formatDate(data.birth);

            const age = calcAge(data.birth);

            const cpf_result = validateCpf(data.cpf);
            const clean_cpf = data.cpf.replace(/[.-]/g, '');
            const result = await user.findOne({ where: { UserCPF: clean_cpf } });

            if (result) {
                return res.render('login', { cpf });
            }
            else if (age < 18) {
                return res.render('registeruser', { cpf, warning: warning[0] });
            }
            else if (data.birth.length < 10) {
                return res.render('registeruser', { cpf, warning: warning[3] });
            }
            else if (data.phone.length < 14) {
                return res.render('registeruser', { cpf, warning: warning[4] });
            } 
            else if (!cpf_result) {
                return res.render('registeruser', { cpf, warning: warning[1] });
            }
            else {
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

function validateCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");

    if (cpf.length !== 11) {
      return false;
    }

    if (cpf === cpf.charAt(0).repeat(11)) {
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += (10 - i) * cpf.charAt(i);
    }
    let primeiroDigito = soma % 11;
    primeiroDigito = primeiroDigito < 2 ? 0 : 11 - primeiroDigito;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += (11 - i) * cpf.charAt(i);
    }
    let segundoDigito = soma % 11;
    segundoDigito = segundoDigito < 2 ? 0 : 11 - segundoDigito;
  
    return primeiroDigito === parseInt(cpf.charAt(9)) && segundoDigito === parseInt(cpf.charAt(10));
  }
