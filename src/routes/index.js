/**
 * Arquivo: src/routes/index.js
 * Descrição: Responsável pela chamada da Api Funcionário da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        success: 'true',
        message:'bem vindo!',
        version : '1.0.0'
    });
});

module.exports = router;