/**
 * Arquivo: src/controllers/calendar.controller.js
 * Descrição: Responsável pelo CRUD da classe 'Calendar'
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const Calendar = require('../models/calendar.model');

//Método responsável por criar novo calendar
exports.create = async (req, res) => {
    try{
        const newCalendar = new Calendar(req.body);
        const calendar = await newCalendar.save();
        res.status(201).send({ message: 'Calendar criado com sucesso!', calendar});
    } catch(e){
        res.status(500).send({ message: 'Falha ao criar Calendar', error: req.body});
    }
};

//--------------Método responsável por listar Calendar's--------------------
exports.findAll = async (req, res) => {
    const calendars = await Calendar.find();
    res.status(200).send(calendars);
}

//--------------Método responsável por selecionar uma Calendar pelo ID--------------------
exports.findById = async (req, res) => {
    const calendar = await Calendar.findById(req.params.id);
    res.status(200).send(calendar);
    }

//--------------Método responsável por atualizar Calendar pelo Id--------------------
exports.update = async (req, res) => {
   //Validar campos
   if (!req.body._id && !req.body.title && !req.body.description &&
    !req.body.stock && !req.body.image) {
        return res.status(400).send({
            message: 'Os campos não podem estar vazios!'
        });
    }
    const calendar = await Calendar.findByIdAndUpdate(req.params.id,req.body);
    const calendarShow = await Calendar.findById(req.params.id);
    res.status(200).send({message: 'Calendar atualizado com sucesso!', calendarShow});
};

//--------------Método responsável por excluir Calendar pelo Id--------------------
exports.delete = async (req, res) => {
    const calendar = await Calendar.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Calendar excluído com sucesso!', calendar});
};
