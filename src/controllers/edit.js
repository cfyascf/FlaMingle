const db = require('../config/db');
const sequelize = require('sequelize');

global.db_name = '';
global.email = '';
global.phone = '';

module.exports = {
    async editUser(req, res){
        const data = req.body;

        db_name = data.name;
        email = data.email;
        
        const query = "UPDATE Users SET Name = :name, Email = :email, Phone = :phone, Password = :password WHERE UserCPF = :cpf";
        const parameters = { name: data.name, email: data.email, phone: data.phone, password: data.password, cpf: cpf };
    
        try {
            await db.query(query, {
                replacements: parameters,
                type: sequelize.QueryTypes.UPDATE 
            });
        
            console.log("User updated");
            res.render('userpage', { cpf, db_name, birth, email, photo });
        } catch (error) {
            res.render('userpage', { cpf, db_name, birth, email, photo });
        }
    },

    async deleteUser(req, res) {
        const clean_cpf = cpf.replace(/[.-]/g, '');
        console.log(cpf);
        console.log(clean_cpf);
        const query = "DELETE FROM Users WHERE UserCPF = :cpf";
        const parameters = { cpf: clean_cpf };
    
        try {
            await db.query(query, {
                replacements: parameters,
                type: sequelize.QueryTypes.DELETE
            });
        
            console.log("User deleted");
            res.redirect('/');
        } catch (error) {
            console.log("User NOT deleted");
            res.render('userpage', { cpf, db_name, birth, email, photo });
        }
    }
}