const user = require('../model/userModel');

module.exports = {
    async userGet(req, res) {
        res.render('view login');
    },

    async userInsert(req, res) {
        
        const data = req.body;

        await user.create ({
            Name: data.name,
            Birth: data.birth,
            CPF: data.cpf,
            Password: data.password
        });

        res.redirect('view pos login')
    }
}