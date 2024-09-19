const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contabilCliente = new Schema({
    contabilId: {
        type: mongoose.Types.ObjectId,
        ref: 'Contabil',
        require: true,
    },
    clienteId: {
        type: mongoose.Types.ObjectId,
        ref: 'Clientes',
        require: true,
    },
    status: {
        type: String,
        require: true,
        enum: ['A', 'I'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

contabil.index({ geo: '2dsphere'});

module.exports = mongoose.model('ContabilCliente', contabilCliente);