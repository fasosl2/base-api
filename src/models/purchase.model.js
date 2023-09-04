/**
 * Arquivo: models/purchases.js
 * Descrição: Responsável pelo modelo da classe 'OS' da Aplicação
 * Data: 04/02/2020
 * Autor: Flávio Oliveira
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        address: {
            type: String,
            required: false,
            maxlength: 999,
        },
        products: [{
            id: {
                type: [Schema.Types.ObjectId],
                ref: "products",
                required: true,
            },
            count: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
        }],
        totalValue: {
            type: Number,
            required: false,
        },
    },
    {
        timestamps: true,
        collection: "Purchase",
    }
);

module.exports = mongoose.model("Purchase", purchaseSchema);
