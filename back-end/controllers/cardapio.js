const CardapioModel = require('../models/cardapio');

index = async (req,res) =>{
	let cardapio = await CardapioModel.find({});
	res.status(200).json({ success: { cardapio }});
};

//
// save = async (req,res) =>{
// 	let novoUsuario = new Usuarios(req.body);
// 	await novoUsuario.save();
// 	console.info("Save is working");
// 	return res.send("So Jesus salva!");
// };
//
// update = async (req,res) =>{
// 	let atualizaUsuario = await Usuarios.where({_id:req.body._id}).update(req.body.dados).exec()
// 	.then(()=>{
// 		console.info("Update is working");
// 		return res.send("Atualizou a bagaça");
// 	});
// };
//
// del = async (req,res) =>{
// 	let novoUsuario = await Usuarios.remove({_id : req.body._id}, ()=>{
// 		return res.send("Apagou tio!");
// 	})
// };

module.exports = {
	index,
	// save,
	// del,
	// update
}