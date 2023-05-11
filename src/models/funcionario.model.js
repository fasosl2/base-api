/**
 * Arquivo: models/funcionario.model.js
 * Descrição: Responsável pelo modelo da classe 'Funcionário' da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const funcionarioSchema = new Schema({
    nomeFuncionario: {
        type: String,
        required: true,
        maxlength: 100
    },
    cargo: {
        type: String,
        required: true,
        maxlength: 50
    },
    cpf: {
        type: String,
        required: true,
        maxlength: 11
    },
}, {
    timestamps: true,
    collection: 'funcionarios'
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);
