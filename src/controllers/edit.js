const db = require('../config/db');
const sequelize = require('sequelize');

module.exports = {
    async editUser(req, res){
        const data = req.body;
        
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
    }
    
}