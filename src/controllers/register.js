const user = require('../model/modelUser');

module.exports = {
    async userGet(req, res) {
        res.render('register');
    },

    async userPost(req, res) {
        
        const data = req.body;

        await user.create ({
            CPF: data.cpf,
            Name: data.name,
            Birth: data.birth,
            Email: data.email,
            Phone: data.phone,
            Password: data.password
        });

        res.redirect('/')
    }
}