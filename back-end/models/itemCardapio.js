const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imagemItemSchema = new Schema({
    path: String,
    image: String
});
const itemCardapioSchema = new Schema({
    codigoProduto: String,
    nome: String,
    preco: String,
    descricao: String,
    imagens: [imagemItemSchema]
});

const ItemCardapioModel = itemCardapioSchema;//mongoose.model('ItemCardapioModel', itemCardapioSchema);
module.exports = ItemCardapioModel;