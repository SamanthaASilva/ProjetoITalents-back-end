const mongoose = require('mongoose');

function connectToDatabase(){
    mongoose.connect('mongodb://127.0.0.1/users', {
    }).then(() => {
        console.log('Mongo DB conectado');
    }).catch((err) => {
        return console.log(`Erro na conexão com o Mongo DB: ${err}`);
    })
}

module.exports = connectToDatabase;