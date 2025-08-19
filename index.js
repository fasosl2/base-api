/**
 * Arquivo: index.js
 * Descrição: Responsável pelo Back-End da Aplicação
 * Data: 03/02/2020
 * Autor: Flávio Oliveira
 */

const app = require('./src/app');

const port = process.env.PORT || 8000;

app.listen(port, '0.0.0.0', () => console.log(`Executando em http://0.0.0.0:${port}`));
