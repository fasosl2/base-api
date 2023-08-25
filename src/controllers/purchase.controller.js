/**
 * Arquivo: src/controllers/purchase.controller.js
 * Descrição: Responsável pelo CRUD da classe 'Purchase'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const Purchase = require('../models/purchase.model');

//Método responsável por criar novo compra
exports.create = async (req, res) => {
    try{
        const newPurchase = new Purchase(req.body);
        const purchase = await newPurchase.save();
        res.status(201).send({ message: 'Compra criada com sucesso!', purchase});
    } catch(e){
        res.status(500).send({ message: 'Falha ao criar Compra', error: req.body});
    }
};

//--------------Método responsável por listar Purchase's--------------------
exports.findAll = async (req, res) => {
    const purchases = await Purchase.find()
    .populate({ path: 'products', select: ['title','price'] })
    .populate({ path: 'user', select: ['name','email'] });
    res.status(200).send(purchases);
}

//--------------Método responsável por selecionar uma Purchase pelo ID--------------------
exports.findById = async (req, res) => {
    const purchase = await Purchase.findById(req.params.id)
    .populate({ path: 'products', select: ['title','price'] })
    .populate({ path: 'user', select: ['name','email'] });
    res.status(200).send(purchase);
    }

//--------------Método responsável por atualizar Purchase pelo Id--------------------
exports.update = async (req, res) => {
   //Validar campos
   if (!req.body._id && !req.body.title && !req.body.description &&
    !req.body.price && !req.body.stock && !req.body.image) {
    return res.status(400).send({
        message: 'Os campos não podem estar vazios!'
    });
}
    const purchase = await Purchase.findByIdAndUpdate(req.params.id,req.body);
    const purchaseShow = await Purchase.findById(req.params.id);
    res.status(200).send({message: 'Compra atualizado com sucesso!', purchaseShow});
};

//--------------Método responsável por excluir Purchase pelo Id--------------------
exports.delete = async (req, res) => {
    const purchase = await Purchase.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Compra excluído com sucesso!', purchase});
};
