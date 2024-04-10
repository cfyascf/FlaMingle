const user = require('../model/modelUser');

const warning = {message: "CPF inválido!", code: 202};
global.cpf = '';

module.exports = {
        async homeGet(req, res) {
            res.render('index', { warning: '' });
        },

        async homePost(req, res) {
            const data = req.body;
            cpf = data.cpf;
            clean_cpf = cpf.replace(/[^\d]/g, ''); 

            if (clean_cpf.length !== 11){
                return res.render('index', { warning }); 
            } 

            let sum = 0;
            let remainder;

            if (/^(\d)\1{10}$/.test(clean_cpf)) {
                return res.render('index', { warning }); 
            }

            for (let i = 1; i <= 10; i++) {
                sum += parseInt(clean_cpf.substring(i - 1, i)) * (12 - i); 
            }
            
            remainder = (sum * 10) % 11;

            if ((remainder === 10) || (remainder === 11))
                remainder = 0;

            if (remainder !== parseInt(clean_cpf.substring(10, 11))){
                return res.render('index', { warning }); 
            }

            const result = await user.findOne({ where: { UserCPF: clean_cpf } });
            if (result) {
                return res.render('login', { cpf }); 
            }

            res.render('registeruser', { cpf });
        }
}