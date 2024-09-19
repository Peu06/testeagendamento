const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    contabilId: {
        type: mongoose.Types.ObjectId,
        ref: 'Contabil',
        require: true,
    },
    especialidades: [{
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        require: true,
    },
],
dias: {
    type: [Number],
    require: true,
},
inicio: {
    type: Date,
    require: true,
},
fim: {
    type: Date,
    default: Date.now,
},
    dataCadastro: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Horario', horario);