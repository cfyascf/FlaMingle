const user = require('../model/modelUser')

module.exports = {
    async editUser(req, res){
        const data = req.body;
        if (data.envio == 'Excluir Conta') {
            const oldPhoto = await user.findAll({
                raw: true,
                attributes: ['Photo'],
                where: { UserCPF: cpf }
            });
        
            if (oldPhoto[0].Photo != 'usuario.png') fs.unlink(`public/img/${oldPhoto[0].Photo}`, ( err => { if(err) console.log(err); } ));

            await user.destroy({ where: { UserCPF : cpf } });
            res.redirect('/');
            return;
        }

        if (req.file) {
            const oldPhoto = await user.findAll({
                raw: true,
                attributes: ['Photo'],
                where: { UserCPF: cpf }
            });
        
            if (oldPhoto[0].Photo != 'usuario.png') fs.unlink(`public/img/${oldPhoto[0].Photo}`, ( err => { if(err) console.log(err); } ));
        
            await user.update(
                {Photo: req.file.filename},
                {where: { UserCPF: cpf }}
            );
        }

        await user.update({
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
        },
        {
        where: { UserCPF: cpf }
        });

    
    res.render('/userpage', { cpf, name, birth, email });
    }
}