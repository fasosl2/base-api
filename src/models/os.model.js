/**
 * Arquivo: models/os.js
 * Descrição: Responsável pelo modelo da classe 'OS' da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const osSchema = new Schema({
    codOS: {
        type: String,
        required: true,
        maxlength: 50
    },
    status: {
        type: String,
        required: true,
        maxlength: 100
    },
    clienteOS: {
        type: String,
        required: true,
        maxlength: 100
    },
    baseOp: {
        type: String,
        required: true,
        maxlength: 50
    },
    tecnicoOS: {
        type: String,
        required: true,
        maxlength: 100
    },
    dtEntrada: {
        type: String,
        required: true
    },
    dtPrevOrcamento: {
        type: String
    },
    dtConcOrcamento: {
        type: String
    },
    dtAprovacao: {
        type: String
    },
    dtPrevConclusao: {
        type: String
    },
    dtDevolucao: {
        type: String
    },
    prioridade: {
        type: String
    }
}, {
    timestamps: true,
    collection: 'oSs'
});

module.exports = mongoose.model('OS', osSchema);
