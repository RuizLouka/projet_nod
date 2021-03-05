connexionbase = mysql.createConnection({host: "localhost",user: "root",password: "root",database: "utilisateur"});
  const bodyP = require('body-parser');
  const file = require('express-fileupload')
  chemin = require('path');

  connexionbase.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
