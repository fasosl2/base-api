/**
 * Arquivo: models/os.js
 * Descrição: Responsável pelo modelo da classe 'OS' da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calendarSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },
    type: {
        type: String,
        required: true,
        maxlength: 50
    },
    date: {
        type: Date,
        required: false,
    }
}, {
    timestamps: true,
    collection: 'calendars'
});

module.exports = mongoose.model('calendars', calendarSchema);
