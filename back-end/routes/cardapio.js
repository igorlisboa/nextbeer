const express = require('express');
const Cardapio = require('../models/cardapio');

const router = express.Router();
const CardapioController = require('../controllers/cardapio');

/**
 * rotas que dão acesso aos controladores das suas funcionalidades
 */
//GET consulta cardapios: retorna lista com todos os cardapios no bd
router.route('/')
    .get(CardapioController.index);

// POST salva novo Cardapio
router.route('/')
	.post(CardapioController.save);
/*
//PUT atualiza usuario
router.route('/')
	.put(CardapioController.update);

//PUT atualiza usuario
router.route('/')
	.delete(CardapioController.del);
*/

module.exports = router;