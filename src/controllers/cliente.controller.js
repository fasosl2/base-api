/**
 * Arquivo: src/controllers/cliente.controller.js
 * Descrição: Responsável pelo CRUD da classe 'cliente'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const Cliente = require('../models/cliente.model');

//Método responsável por criar novo cliente
exports.create = async (req, res) => {
    const novoCliente = new Cliente(req.body);
    const cliente = await novoCliente.save();
    res.status(201).send({
        message: 'Cliente criado com sucesso!',
        cliente
    });
};

//--------------Método responsável por listar clientes--------------------
exports.findAll = async (req, res) => {
    const clientes = await Cliente.find();
    res.status(200).send(clientes);
}

//--------------Método responsável por selecionar Cliente pelo ID--------------------
exports.findById = async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.status(200).send(cliente);
}

//--------------Método responsável por atualizar cliente pelo Id--------------------
exports.update = async (req, res) => {
    //Validar campos
    if (!req.body.nomeCliente && !req.body.estado && !req.body.cnpj) {
        return res.status(400).send({ message: 'Os campos não podem estar vazios!'});
    }
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body);
    const clienteShow = await Cliente.findById(req.params.id);
    res.status(200).send({message: 'Cliente atualizado com sucesso!',clienteShow});
}

//--------------Método responsável por excluir cliente pelo Id--------------------
exports.delete = async (req, res) => {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Funcionário excluído com sucesso!',cliente});
};