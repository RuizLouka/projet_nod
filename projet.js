const connexionbase=require('connexion')
const express = require('express')
const mysql = require('mysql');
const fs = require('fs')
const port = 3000
const api = express()

chemin = require('path');


  

  connexionbase.connect(function (err) {
   
  db.query("CREATE TABLE utilisateur  (utilisateur_id INT AUTO_INCREMENT PRIMARY KEY,civilite VARCHAR(25),nom TEXT, prenom TEXT, email VARCHAR(50), anniversaire DATETIME, image VARCHAR(255),mot passe VARCHAR(30)", function (err, result) {

  });
 
  console.log("Connecté à la base de données MySQL ainsi que créer");
});
const bodyP = require('body-parser');
const file = require('express-fileupload')

api.use(bodyP.urlencoded({ limit: '100mb',extended: true}));
api.use(fileUpload());
api.use(express.static());


console.log('Démarage du serveur ');

  api.post('/utilisateur/', (req, res) => {
    const valeur = req.body
    const file_name =  file.name
    
    if (valeur.nom.length==0 ||valeur.prenom.length==0 ||valeur.nom.mot_passe==0 ||valeur.nom.telephone.length<6) {
      file.mv('public/image/' + file_name, (err) => {
        if (err)
          return res.status(500).json(err)
  
        connexionbase.query('INSERT INTO utilisateur SET ?', [valeur], (err, row) => {
          if (err) return res.status(400).json
    
          res.send(`users avec les parametres ${valeur.name}, ${valeur.firstname}, ${valeur.email}, ${valeur.date_naissance},${params.mot_passe},${params.civilité},${params.civilité}  ont été ajouté`)
        })
      })
    } else {
      return res.status(500).json('pas le bon format')
    }
  
  })

api.put('/user/:id_utilisateur', (req, res) => {const params = req.body
  

  if (params.nom.length==0 ||params.prenom.length==0 ||params.nom.mot_passe==0 ||params.nom.telephone.length<6){ return res.status(400).json('les données ne sont pas conforme')
     

        connexionbase.query('UPDATE users SET ? WHERE utilisateur_id = ?', [params, req.params.id_utilisateur], function (err, row) {


        if(err.kind === "not_found")  res.json(`update fait`)
        else console.log(err)
      })
    
  } else {
    return res.status(404).json('pas le bon format')
  }
  api.get('/utilisateur', (req, res) => {
    connexionbase.query('SELECT , civilite, nom, prenom, email, anniversaire, image,mot passe  FROM utilisateur', function (err, resultat, fields) {
    if (err) id_utilisateur
      res.status(400).json(`aucun utilisateur trouver `)
    
    if (err) res.status(500).send(err)
    res.json(resultat);
    })
  
  });
  api.delete('/utilisateur/:id_utilisateur', (req, res) => {
  connexionbase.query('DELETE FROM utilisateur WHERE utilisateur_id = ?', [req.params.id_utilisateur],
   function (err, resultat) {
        if (err) {
          res.status(400).json(err)
        }
        if (result[0].image !== undefined) fs.unlinkSync(`public/${result[0].image}`)
        res.json(`l'utilisateur à été supprimé`)
    });
  })
  api.get('/utilisateur/:id_utilisateur', (req, res, next) => {
    connexionbase.query('SELECT id, civilite, nom, prenom,  email, anniversaire, image,mot passe FROM utilisateur WHERE utilisateur_id = ?',fu [req.params.id_utilisateur], 
    function (err, resultat, fields) {
    if (Object.keys(resultat).length < 1 ||err.kind === "not_found") {
      res.status(400).json(`on ne trouve pas  d'utilisateur correspondant `)
    } else {
      res.json('L utilisateur ',resultat)
    }
    
  })
  });
  
}); 

api.listen(port, () => { console.log(`Le serveur est lancé sur le port ${port}`) });
