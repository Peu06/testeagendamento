const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    cadastro: {
            tipo: {
            type: String,
            require: true,
            enum: ['E', 'P'],
        },
        documento: {
            type: String,
            require: true,
        },
    },    
        nome: {
            type: String,
            require: true,
        },
        fone: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        endereco: {
            rua: {
                type: String,
                require: [true, 'Esse campo é obrigatorio']
            },
            cidade: {
                type: String,
                require: [true, 'Esse campo é obrigatorio']
            },
            uf: {
                type: String,
                require: [true, 'Esse campo é obrigatorio']
            },
            cep: String,
            numero: {
                type: String,
                require: [true, 'Esse campo é obrigatorio']
            },
            bairro: String,
        },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Cliente', cliente);