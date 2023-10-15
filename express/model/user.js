const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {type: String},
    dataNascimento: {type: Number},
    cidade: {type: String},
    profissao: {type: String},
    genero: {type: String},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true}
})

const user = mongoose.model('users', userSchema);

module.exports = user;