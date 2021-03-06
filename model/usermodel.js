const mongo = require('mongoose')
  
const connexion = require('../db');

mongoose.Promise = global.Promise;

const users = mongoose.model("utilisateur",
    mongoose.Schema({
    nom: String,
    prenom: String,
    userName:  String,
    civilite: String,
    mail:  String,
    phone: String,
    image: String,
    role: String,
    date_naissance: Date,
    mot_passe:String,
    telephone: Number,
    is_ative: { type: Boolean, default: false},
    is_deleted: { type: Boolean, default: false}
})

);


const dataBase = {
    mongoose: mongo,
    url: connexion.url,
    users: utilisateur
};

module.exports = dataBase;
