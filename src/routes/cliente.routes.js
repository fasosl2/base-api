/**
 * Arquivo: routes/clienteRoutes.js
 * Descrição: Responsável pelas rotas da api relacionadas ao 'cliente'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

// ------------------- Rotas http da api - cliente -----------------------
const router = require('express-promise-router')();
const clienteController = require('../controllers/cliente.controller')
const auth = require('../middleware/auth');

//------------definir rotas do CRUD do cliente ----------------------------

// Rota responsável por criar um novo cliente (POST): localhost:8000/cliente
router.post('/clientes', clienteController.create);

//Rota responsável por selecionar todos os clientes (GET): localhost:8000/clientes
router.get('/clientes', clienteController.findAll);

//Rota responsável por selecionar um cliente pelo id (GET): localhost:8000/cliente/:id
router.get('/clientes/:id', clienteController.findById);

//Rota responsável por atualizar um cliente pelo id (PUT): localhost:8000/cliente/:id
router.put('/clientes/:id', clienteController.update);

//Rota responsável por excluir um cliente pelo id (DEL): localhost:8000/cliente/:id
router.delete('/clientes/:id', clienteController.delete);

module.exports = router;
