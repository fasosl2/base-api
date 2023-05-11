/**
 * Arquivo: src/controllers/funcionario.controller.js
 * Descrição: Responsável pelo CRUD da classe 'Funcionário'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const Funcionario = require('../models/funcionario.model');

//--------------Método responsável por criar novo funcionário--------------------
exports.create = async (req, res) => {
    const novoFuncionario = new Funcionario(req.body);
    const funcionario = await novoFuncionario.save();
    res.status(201).send({ message: 'Funcionário criado com sucesso!', funcionario});
};

//--------------Método responsável por listar funcionários--------------------
exports.findAll = async (req, res) => {
    const funcionarios = await Funcionario.find();
    res.status(200).send(funcionarios);
};

//--------------Método responsável por selecionar funcionário pelo ID--------------------
exports.findById = async (req, res) => {
const funcionario = await Funcionario.findById(req.params.id);
res.status(200).send(funcionario);
};
//--------------Método responsável por atualizar funcionário pelo Id--------------------
exports.update = async (req, res) => {
    //Validar campos
    if (!req.body.nomeFuncionario || !req.body.cargo || !req.body.cpf) {
        return res.status(400).send({message: 'Os campos não podem estar vazios!'});
    }
    const funcionario = await Funcionario.findByIdAndUpdate(req.params.id,req.body);
    const funcionarioShow = await Funcionario.findById(req.params.id);
    res.status(200).send({message: 'Funcionário atualizado com sucesso!',funcionarioShow});
}

//--------------Método responsável por excluir funcionário pelo Id--------------------
exports.delete = async (req, res) => {
    const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Funcionário excluído com sucesso!',funcionario});
};