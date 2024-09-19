const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    contabilId: {
        type: mongoose.Types.ObjectId,
        ref: 'Contabil',
    },
    titulo: {
        type: String,
        require: true,
    },
    doc: {
        type: String,
        require: true,
    },
    preco: {
        type: Number,
        require: true,
    },
    duracao: {
        type: Number,
        require: true,
    },
    recorrencia: {
        type: Number,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
        enum: ['A', 'I', 'E'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Servico', servico);