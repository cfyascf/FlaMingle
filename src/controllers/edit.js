const user = require('../model/modelUser')

module.exports = {
    async photoAdd(req, res) {

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

        res.render('userpage', { cpf, name, birth, email });
    }
}