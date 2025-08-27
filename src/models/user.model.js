/**
 * Arquivo: models/user.model.js
 * Descrição: Responsável pelo modelo da classe 'User' da Aplicação
 * Data: 14/04/2020
 * Autor: Flávio Oliveira
 */
const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authConfig = process.env.SECRET;

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    cpf: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    hash: String,
    salt: String,
}, {
    timestamps: true,
    collection: 'users',
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = () => {
    return jwt.sign({
        id: this._id,
        email: this.email,
        name: this.name,
    }, authConfig, {
        expiresIn: 172800, // expires in 2 days
    });

};

userSchema.methods.authJwt = function () {
    console.log("dnfjdfjdfndjf");
    return "sasas";
};

module.exports = mongoose.model('User', userSchema);
