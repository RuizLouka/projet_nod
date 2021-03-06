  
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Utilisateur", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connecté a MongoDB');
    }).catch((err) => console.log(err));

module.exports = mongoose;
