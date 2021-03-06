  
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://colin:root@cluster0.7v9wl.mongodb.net/utilisateur", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connecté a MongoDB');
    }).catch((err) => console.log(err));

module.exports = mongoose;
