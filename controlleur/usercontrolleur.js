const { request } = require('express');
const dataBase = require('../models/usermodel');

const users = dataBase.users;

const find = (request, response) => {
    const userid = request.params.id;

    users.findById(userid)
    .then((user) => {
        if (!user) {
            return res.status(404).json({
                message: "User non trouvé avec l'id " + req.params.id,
            });
        }
        res.status(200).json(user);
        console.log(user);
    })
    .catch((err) => {
        return res.status(500).json({
            message: "User non trouvé avec l'id " + req.params.id,
        });
    });
};

const findAll = (request, response) => {
    users.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Erreur",
        });
    });
};

const create = (request, response) => {
    // if(!request.body) response.send({ message: "Les champs sont obligatoires"});
    const {nom,prenom,userName,civilite,mail,phone,image,role,date_naissance, mot_passe, telephone} = request.body;
    const newUsers = new users(
        {
            nom:nom,
            prenom: prenom,
            userName: userName,
            civilite: civilite,
            mail: mail,
            phone:phone,
            image:image,
            role:role,
            date_naissance:date_naissance, 
            mot_passe:mot_passe, 
            telephone:telephone
        }
    );
    newUsers.save()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Erreur a la creation du user",
        });
    });
};

const update = (request, response) => {
    const userid = request.params.id;
    console.log(request.body)
    users.findByIdAndUpdate(userid, request.body, { new: true })
        .then(data => {
            if(!data) return response.send({ message: `Mise à jour impossible` })
            response.send({ message: `Mise à jour reussite` })
        }).catch(err => response.send(err))
};
const deletes = (request, response) => {
    const userid = request.params.id;

    users.findByIdAndRemove(userid)
    .then((data) => {
        if (data) {
            return res.status(404).json({
                message: "User non trouvé",
            });
        }
        res.json({
            message: "User supprimé"
        });
    })
    .catch((err) => {
        return res.status(500).json({
            message: "Impossible de supprimer le user",
        });
    });
    
};

module.exports = {find,findAll,create, update,deletes
   
};