const express = require('express');
const router = express.Router();

const config = require('../config')
//jwt
const jwt = require('jsonwebtoken');
/**
 * Recebe email e senha
 * Return: token de acesso
 */
router.post('/login', (req, res, next) => {
    const { email, password} = req.body.userData;
    console.log(req.body.userData);
    if(email && password){
        let tokenData = {
            id: 1
        };
        let generatedToken = jwt.sign(tokenData, config.auth.JWT_KEY, {expiresIn: '1m'});
        res.json({
            success: true,
            token: generatedToken
        });
    }else{
        res.status(401).json({
            success: false,
            code: '003',
            message: "E-mail e/ou senha inválidos"
        });
    }
});

module.exports = router;