/**
 * Arquivo: routes/osRoutes.js
 * Descrição: Responsável pelas rotas da api relacionadas à 'os'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

// ------------------- Rotas http da api - OS -----------------------
const router = require('express-promise-router')();
const productController = require('../controllers/product.controller')

//------------definir rotas do CRUD da OS ----------------------------

// Rota responsável por criar uma nova OS (POST): localhost:8000/api/os/
router.post('/products', productController.create);

//Rota responsável por selecionar todas as OS's (GET): localhost:8000/os/
router.get('/products', productController.findAll);

//Rota responsável por selecionar uma OS pelo id (GET): localhost:8000/os/:id
router.get('/products/:id', productController.findById);

//Rota responsável por atualizar uma OS pelo id (PUT): localhost:8000/os/:id
router.put('/products/:id', productController.update);

//Rota responsável por excluir uma OS pelo id (DEL): localhost:8000/os/:id
router.delete('/products/:id', productController.delete);


module.exports = router;
