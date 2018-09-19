const Usuarios = require('../models/usuarios');

index = async (req,res) =>{
	let usuarios = await Usuarios.find({});
	res.status(200).json({ success: { usuarios }});
};


save = async (req,res) =>{
	let novoUsuario = new Usuarios(req.body);
	await novoUsuario.save((err, result) => {
        if(!err){
            res.json({
                success : true,
                message: 'Usuario Registrado',
                data : result
            });
        }else {
            res.json({
                success : false,
                message: 'Falha ao registrar usuário.',
                data : err
            });
        }
        return res;
    });
};

update = async (req,res) =>{
	let atualizaUsuario = await Usuarios.where({_id:req.body._id}).update(req.body.dados).exec()
	.then(()=>{
		console.info("Update is working");
		return res.send("Atualizou a bagaça");
	});
};

del = async (req,res) =>{
	let novoUsuario = await Usuarios.remove({_id : req.body._id}, ()=>{
		return res.send("Apagou tio!");	
	})
};

module.exports = {
	index,
	save,
	del,
	update
}