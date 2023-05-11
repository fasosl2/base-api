/**
 * Arquivo: models/user.model.js
 * Descrição: Responsável pelo modelo da classe 'User' da Aplicação
 * Data: 14/04/2020
 * Autor: Flávio Oliveira
 */
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
}, {
    timestamps: true,
    collection: 'users'
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({
        id: this._id,
        email: this.email,
        nome: this.nome
    }, authConfig.secret, {
        expiresIn: 43200 // expires in 5min
    });

};

userSchema.methods.authJwt = function () {
    console.log("dnfjdfjdfndjf");
    return "sasas";
};

module.exports = mongoose.model('User', userSchema);
