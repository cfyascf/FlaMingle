const warning = {message: "CPF inválido!", code: 202};

module.exports = {
        async homeGet(req, res) {
            res.render('index', { warning: '' });
        },

        async homePost(req, res) {

            const data = req.body;
            let cpf = data.cpf;
            cpf = cpf.replace(/[^\d]/g, ''); 

            if (cpf.length !== 11){
                return res.render('index', { warning }); 
            } 

            let sum = 0;
            let remainder;

            if (/^(\d)\1{10}$/.test(cpf)) {
                return res.render('index', { warning }); 
            }

            for (let i = 1; i <= 10; i++) {
                sum += parseInt(cpf.substring(i - 1, i)) * (12 - i); 
            }
            
            remainder = (sum * 10) % 11;

            if ((remainder === 10) || (remainder === 11))
                remainder = 0;

            if (remainder !== parseInt(cpf.substring(10, 11))){
                return res.render('index', { warning }); 
            }

            res.render('registeruser');
        }
}