/**
 * Arquivo: src/controllers/user.controller.js
 * Descrição: Responsável pelo CRUD da classe 'User'
 * Data: 14/04/2020
 * Autor: Flávio Oliveira
 */
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authConfig = process?.env?.SECRET;
const User = require('../models/user.model');

// --------------Método responsável por criar novo user--------------------
exports.create = async (req, res) => {
  const novoUser = new User(req.body);
  novoUser.setPassword(req.body.password);
  console.log(novoUser);
  const user = await novoUser.save();
  res.status(201).send({
    message: 'User criado com sucesso!',
    user,
  });
};

// --------------Método responsável por listar users--------------------
exports.findAll = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

// --------------Método responsável por selecionar user pelo ID--------------------
exports.findById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
};

// --------------Método responsável por atualizar user pelo Id--------------------
exports.update = async (req, res) => {
  // Validar campos
  if (!req.body.name || !req.body.type) {
    return res.status(400).send({
      message: 'Os campos não podem estar vazios!',
    });
  }
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  const userShow = await User.findById(req.params.id);
  res.status(200).send({
    message: 'User atualizado com sucesso!',
    userShow,
  });
};

// --------------Método responsável por excluir user pelo Id--------------------
exports.delete = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(200).send({
    message: 'User excluído com sucesso!',
    user,
  });
};

// --------------Método responsável por fazer login--------------------
exports.userLogin = async (req, res) => {
  const user = await User.findOne({
    email: req.params.email,
  });
  if (user) {
    if (user.validPassword(req.params.password)) {
      user.hash = undefined;
      user.salt = undefined;
      user.createdAt = undefined;
      user.updatedAt = undefined;
      user.__v = undefined;

      const token = user.generateJwt();

      res.status(200).send({
        user,
        auth: true,
        token,
      });

    } else {
      res.status(401).send('{INVALID PASSWORD}');
    }
  } else {
    res.status(404).send('{NOT FOUND}');
  }
};

// --------------Método responsável por validar o usuário--------------------
exports.userAuth = (req, res, next) => {

  if(!['/api/logout', '/api/users/login/'].find(ele => req.path.includes(ele))
  && !(req.path.includes('/api/products') && req.method === 'GET')
  && !(req.path.includes('/api/items') && req.method === 'GET')){
    const token = req.headers['x-access-token'];
    if (!token?.length) {
        return res.status(401).send({
          message: 'No token provided.',
          auth: false,
        });
      }
      jwt.verify(token, authConfig, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: 'Autentication failed',
            auth: false,
          });
        }
        req.userId = decoded.id;
        next();
      });
  } else{
      next();
  }
};

exports.userLogout = (req, res) => {
  res.status(200).send({
    auth: false,
    token: null,
  });
};
