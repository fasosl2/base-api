/**
 * Arquivo: src/controllers/item.controller.js
 * Descrição: Responsável pelo CRUD da classe 'Item'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const Item = require('../models/item.model');

//Método responsável por criar novo item
exports.create = async (req, res) => {
    try{
        const newItem = new Item(req.body);
        const item = await newItem.save();
        res.status(201).send({ message: 'Item criado com sucesso!', item});
    } catch(e){
        res.status(500).send({ message: 'Falha ao criar Item', error: req.body});
    }
};

//--------------Método responsável por listar Item's--------------------
exports.findAll = async (req, res) => {
    const items = await Item.find();
    res.status(200).send(items);
}

//--------------Método responsável por selecionar uma Item pelo ID--------------------
exports.findById = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.status(200).send(item);
    }

//--------------Método responsável por atualizar Item pelo Id--------------------
exports.update = async (req, res) => {
   //Validar campos
   if (!req.body._id && !req.body.title && !req.body.description &&
    !req.body.stock && !req.body.image) {
        return res.status(400).send({
            message: 'Os campos não podem estar vazios!'
        });
    }
    const item = await Item.findByIdAndUpdate(req.params.id,req.body);
    const itemShow = await Item.findById(req.params.id);
    res.status(200).send({message: 'Item atualizado com sucesso!', itemShow});
};

//--------------Método responsável por excluir Item pelo Id--------------------
exports.delete = async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Item excluído com sucesso!', item});
};
