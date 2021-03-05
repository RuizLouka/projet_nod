const express = require('express')
const mysql = require('mysql');

const fs = require('fs')
const port = 3000
const app = express()
const bodyP = require('body-parser');
  const file = require('express-fileupload')
  chemin = require('path');

connexionbase.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
  

app.useapp(bodyP.urlencoded({
  limit: '500mb',
  extended: true,
  
}));
app.useapp(file());

app.useapp(express.static(chemin.join(__dirname, 'public')));
app.post('/utilisateur/', (req, res) => {
    const valeur = req.body
   
    if (!req.files)
      return res.status(404).json('il faut une image')
  
    const file = req.files.image
    const file_name = + file.name + new Date().getTime() 
    params.image = `image/${file_name}`
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif") {
      file.mv('public/image/' + file_name, (err) => {
        if (err)
          return res.status(500).json(err)
  
        connexionbase.query('INSERT INTO utilisateur SET ?', [valeur], (err, row) => {
          if (err) return res.status(400).json(`${err.message}`)
    
          res.send(`users avec les parametres ${params.name}, ${params.firstname}, ${params.email}, ${params.date_naissance},${params.mot_passe},${params.civilité},${params.civilité}  ont été ajouté`)
        })
      })
    } else {
      return res.status(500).json('pas le bon format')
    }
  
  })
  
app.put('/utilisateur/:id_utilisateur', (req, res) => {
    const params = req.body
  
   
  
 
  
        connexionbase.query('UPDATE users SET ? WHERE utilisateur_id = ?', [params, req.params.id_utilisateur], function (err, row) {
  
          if (!err) res.json(`update fait`)
          else console.log(err)
        })
      })
    } else {
      return res.status(500).json('pas le bon format')
    }
  });


app.get('/utilisateur', (req, res) => {
    connexionbase.query('SELECT * FROM utilisateur', function (err, resultat, fields) {
    if (Object.keys(resultat).length == 0) {
      res.status(400).json(`aucun utilisateur trouver `)
    }
    if (err) res.status(404).send(err)
    res.json(result);
  })
});

app.get('/utilisateur/:id_utilisateur', (req, res, next) => {
    connexionbase.query('SELECT * FROM utilisateur WHERE utilisateur_id = ?', [req.params.id_utilisateur], 
    function (err, resultat, fields) {
    if (Object.keys(resultat).length === 0) {
      res.status(400).json(`on ne trouve pas  d'utilisateur correspondant `)
    } else {
      res.json('L utilisateur ',resultat)
    }
    
  })
});

app.delete('/utilisateur/:id_utilisateur', (req, res) => {
  connexionbase.query('DELETE FROM utilisateur WHERE utilisateur_id = ?', [req.params.id_utilisateur],
   function (err, resultat) {
        if (err) {
          res.status(400).json(err)
        }
        if (result[0].image !== undefined) fs.unlinkSync(`public/${result[0].image}`)
        res.json(`l'utilisateur à été supprimé`)
    })
  })



app.listen(port, () => console.log(`connecter {port}`))
