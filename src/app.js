/**
 * Arquivo: src/app.js
 * Descrição: Responsável pela configuração do Back-End da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
var passport = require('passport');
const passportConfig = require('./config/passport');

const app = express();

// Importar o arquivo: 'database.js'
const localDatabase = require('./config/database'); // ==> persistencia de maneira local: MongoDb
// const databaseCosmosDb = require('./config/databaseCosmosDb'); // ==> persistencia na nuvem: CosmosDb

mongoose.Promise = global.Promise;

// ==> Conexão com a Base de Dados:
mongoose.connect(localDatabase.local.localUrl, { useNewUrlParser: true }).then(() => {
  console.log('A Base de dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a base de Dados...: ${err}`);
  process.exit();
});

// ==> Rotas
const funcionarioRoute = require('./routes/funcionario.routes');
const clienteRoute = require('./routes/cliente.routes');
const osRoute = require('./routes/os.routes');
const userRoute = require('./routes/user.routes');
const productRoute = require('./routes/product.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use(passport.initialize());
app.use('/api/', funcionarioRoute);
app.use('/api/', clienteRoute);
app.use('/api/', userRoute);
app.use('/api/', productRoute);

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

module.exports = app;
