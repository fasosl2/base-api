/**
 * Arquivo: models/os.js
 * Descrição: Responsável pelo modelo da classe 'OS' da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
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
    price: {
        type: String,
        required: true,
        maxlength: 100
    },
    stock: {
        type: String,
        required: true,
        maxlength: 50
    },
    image: {
        type: String,
        required: false,
    }
}, {
    timestamps: true,
    collection: 'products'
});

module.exports = mongoose.model('products', productSchema);
