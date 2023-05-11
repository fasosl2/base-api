/**
 * Arquivo: routes/funcionarioRoutes.js
 * Descrição: Responsável pelas rotas da api relacionadas ao 'Funcionário'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

// ------------------- Rotas http da api - funcionário -----------------------
const router = require('express-promise-router')();
const funcionarioController = require('../controllers/funcionario.controller')

//------------definir rotas do CRUD do funcionário ----------------------------

// Rota responsável por criar um novo funcionário (POST): localhost:8000/funcionarios
router.post('/funcionarios', funcionarioController.create);

//Rota responsável por listar todos os funcionários (GET): localhost:8000/funcionarios
router.get('/funcionarios', funcionarioController.findAll);

//Rota responsável por selecionar um funcionário pelo id (GET): localhost:8000/funcionarios/:id
router.get('/funcionarios/:id', funcionarioController.findById);

//Rota responsável por atualizar um funcionário pelo id (PUT): localhost:8000/funcionarios/:id
router.put('/funcionarios/:id', funcionarioController.update);

//Rota responsável por excluir um funcionário pelo id (DEL): localhost:8000/funcionarios/:id
router.delete('/funcionarios/:id', funcionarioController.delete);


module.exports = router;