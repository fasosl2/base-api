/**
 * Arquivo: server.js
 * Descrição: Responsável pelo Back-End da Aplicação
 * Data: 03/02/2020
 * Autor: Flávio Oliveira
 */

const app = require('./src/app');

const port = process.env.PORT || 8000;

app.listen(port);

console.log(`Executando em http://localhost:${port}`);