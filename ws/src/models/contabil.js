const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contabil = new Schema({
    nome: {
        type: String,
        require: [true, 'Esse campo é obrigatorio']
    },
    sobrenome: {
        type: String,
        require: [true, 'Esse campo é obrigatorio']
    },
    email: {
        type: String,
        require: [true, 'Esse campo é obrigatorio']
    },
    fone: {
        type: String,
        require: [true, 'Esse campo é obrigatorio']
    },
    senha: {
        type: String,
        default: null,
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
    geo: {
        type: String,
        coordinates: Array,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

contabil.index({ geo: '2dsphere'});

module.exports = mongoose.model('Contabil', contabil);