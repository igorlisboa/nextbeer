const Usuarios = require('../models/usuarios');

index = async (req,res) =>{
	let usuarios = await Usuarios.find({});
	res.status(200).json({ success: { usuarios }});
};


save = async (req,res) =>{
	console.info("Save is working");
};

module.exports = {
	index,
	save
}