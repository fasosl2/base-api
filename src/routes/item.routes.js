/**
 * Arquivo: routes/osRoutes.js
 * Descrição: Responsável pelas rotas da api relacionadas aos 'Itens'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

// ------------------- Rotas http da api - OS -----------------------
const router = require('express-promise-router')();
const itemController = require('../controllers/item.controller')

//------------definir rotas do CRUD da OS ----------------------------

// Rota responsável por criar uma nova OS (POST): localhost:8000/api/os/
router.post('/items', itemController.create);

//Rota responsável por selecionar todas as OS's (GET): localhost:8000/os/
router.get('/items', itemController.findAll);

//Rota responsável por selecionar uma OS pelo id (GET): localhost:8000/os/:id
router.get('/items/:id', itemController.findById);

//Rota responsável por atualizar uma OS pelo id (PUT): localhost:8000/os/:id
router.put('/items/:id', itemController.update);

//Rota responsável por excluir uma OS pelo id (DEL): localhost:8000/os/:id
router.delete('/items/:id', itemController.delete);


module.exports = router;
