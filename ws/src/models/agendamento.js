const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
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
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        require: true,
    },
    date: {
        type: Number,
        require: true,
    },
    valor: {
        type: Date,
        require: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Agendamento', agendamento);