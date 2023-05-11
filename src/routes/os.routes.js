/**
 * Arquivo: routes/osRoutes.js
 * Descrição: Responsável pelas rotas da api relacionadas à 'os'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

// ------------------- Rotas http da api - OS -----------------------
const router = require('express-promise-router')();
const osController = require('../controllers/os.controller')

//------------definir rotas do CRUD da OS ----------------------------

// Rota responsável por criar uma nova OS (POST): localhost:8000/api/os/
router.post('/oss', osController.create);

//Rota responsável por selecionar todas as OS's (GET): localhost:8000/os/
router.get('/oss', osController.findAll);

//Rota responsável por selecionar uma OS pelo id (GET): localhost:8000/os/:id
router.get('/oss/:id', osController.findById);

//Rota responsável por atualizar uma OS pelo id (PUT): localhost:8000/os/:id
router.put('/oss/:id', osController.update);

//Rota responsável por excluir uma OS pelo id (DEL): localhost:8000/os/:id
router.delete('/oss/:id', osController.delete);


module.exports = router;