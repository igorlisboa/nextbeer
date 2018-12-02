const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ItemCardapioModel = require('./itemCardapio')

const cardapioSchema = new Schema({
	nome : String,
	icone : String,
	itens : [ItemCardapioModel],
	tema : String
});

const CardapioModel = mongoose.model('CardapioModel', cardapioSchema);
module.exports = CardapioModel;
