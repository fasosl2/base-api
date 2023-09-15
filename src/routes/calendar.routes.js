/**
 * Arquivo: routes/osRoutes.js
 * Descrição: Responsável pelas rotas da api relacionadas aos 'Itens'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

// ------------------- Rotas http da api - OS -----------------------
const router = require('express-promise-router')();
const calendarController = require('../controllers/calendar.controller')

//------------definir rotas do CRUD da OS ----------------------------

// Rota responsável por criar uma nova OS (POST): localhost:8000/api/os/
router.post('/calendars', calendarController.create);

//Rota responsável por selecionar todas as OS's (GET): localhost:8000/os/
router.get('/calendars', calendarController.findAll);

//Rota responsável por selecionar uma OS pelo id (GET): localhost:8000/os/:id
router.get('/calendars/:id', calendarController.findById);

//Rota responsável por atualizar uma OS pelo id (PUT): localhost:8000/os/:id
router.put('/calendars/:id', calendarController.update);

//Rota responsável por excluir uma OS pelo id (DEL): localhost:8000/os/:id
router.delete('/calendars/:id', calendarController.delete);


module.exports = router;
