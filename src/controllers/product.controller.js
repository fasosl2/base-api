/**
 * Arquivo: src/controllers/product.controller.js
 * Descrição: Responsável pelo CRUD da classe 'Product'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const Product = require('../models/product.model');

//Método responsável por criar novo produto
exports.create = async (req, res) => {
    try{
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        res.status(201).send({ message: 'Produto criado com sucesso!', product});
    } catch(e){
        res.status(500).send({ message: 'Falha ao criar Produto', error: req.body});
    }
};

//--------------Método responsável por listar Product's--------------------
exports.findAll = async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
}

//--------------Método responsável por selecionar uma Product pelo ID--------------------
exports.findById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
    }

//--------------Método responsável por atualizar Product pelo Id--------------------
exports.update = async (req, res) => {
   //Validar campos
   if (!req.body.codProduct && !req.body.status && !req.body.clienteProduct &&
    !req.body.baseOp && !req.body.tecnicoProduct && !req.body.dtEntrada) {
    return res.status(400).send({
        message: 'Os campos não podem estar vazios!'
    });
}
    const product = await Product.findByIdAndUpdate(req.params.id,req.body);
    const productShow = await Product.findById(req.params.id);
    res.status(200).send({message: 'Produto atualizado com sucesso!', productShow});
};

//--------------Método responsável por excluir Product pelo Id--------------------
exports.delete = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Funcionário excluído com sucesso!', product});
};
