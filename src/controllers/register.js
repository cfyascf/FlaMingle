const user = require('../model/modelUser');

module.exports = {
    async registerGet(req, res) {
        res.render('registeruser');
    },

    async registerPost(req, res) {
        
        const data = req.body;

        await user.create ({
            CPF: data.cpf,
            Name: data.name,
            Birth: data.birth,
            Email: data.email,
            Phone: data.phone,
            Password: data.password
        });

        res.redirect('/');
    }
}