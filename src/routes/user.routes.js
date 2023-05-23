/**
 * Arquivo: routes/user.routes.js
 * Descrição: Responsável pelas rotas da api relacionadas ao 'User'
 * Data: 14/04/2020
 * Autor: Flávio Oliveira
 */

// ------------------- Rotas http da api - user -----------------------
const router = require('express-promise-router')();
const jwt = require('express-jwt');
const passport = require('passport');
const mongoose = require('mongoose');
const userController = require('../controllers/user.controller');
const User = require('../models/user.model');

// ------------definir rotas do CRUD do user ----------------------------

// Rota responsável por criar um novo user (POST): localhost:8000/users
router.post('/users', userController.create);

// Rota responsável por listar todos os users (GET): localhost:8000/users
router.get('/users', userController.findAll);
// travar pelo login , auth

// Rota responsável por selecionar um user pelo id (GET): localhost:8000/users/:id
router.get('/users/:id', userController.findById);

// Rota responsável por atualizar um user pelo id (PUT): localhost:8000/users/:id
router.put('/users/:id', userController.update);

// Rota responsável por excluir um user pelo id (DEL): localhost:8000/users/:id
router.delete('/users/:id', userController.delete);

// Rota responsável por fazer login: localhost:8000/users/login/:email/:senha
router.get('/users/login/:email/:password', userController.userLogin);

// Rota responsável por fazer login: localhost:8000/auth
router.get('/auth', userController.userAuth);

// Rota responsável por fazer login: localhost:8000/logout
router.get('/logout', userController.userLogout);

module.exports = router;
