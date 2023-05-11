/**
 * Arquivo: src/controllers/os.controller.js
 * Descrição: Responsável pelo CRUD da classe 'OS'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const OS = require('../models/os.model');

//Método responsável por criar nova os
exports.create = async (req, res) => {
    const novoOS = new OS(req.body);
    const os = await novoOS.save();
    res.status(201).send({ message: 'OS criado com sucesso!', os});
};

//--------------Método responsável por listar OS's--------------------
exports.findAll = async (req, res) => {
    const oSs = await OS.find();
    res.status(200).send(oSs);
}

//--------------Método responsável por selecionar uma OS pelo ID--------------------
exports.findById = async (req, res) => {
    const os = await OS.findById(req.params.id);
    res.status(200).send(os);
    }

//--------------Método responsável por atualizar OS pelo Id--------------------
exports.update = async (req, res) => {
   //Validar campos
   if (!req.body.codOS && !req.body.status && !req.body.clienteOS &&
    !req.body.baseOp && !req.body.tecnicoOS && !req.body.dtEntrada) {
    return res.status(400).send({
        message: 'Os campos não podem estar vazios!'
    });
}
    const os = await OS.findByIdAndUpdate(req.params.id,req.body);
    const osShow = await OS.findById(req.params.id);
    res.status(200).send({message: 'OS atualizada com sucesso!', osShow});
};

//--------------Método responsável por excluir OS pelo Id--------------------
exports.delete = async (req, res) => {
    const os = await OS.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Funcionário excluído com sucesso!', os});
};