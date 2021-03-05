connexionbase = mysql.createConnection({host: "localhost",user: "root",password: "root",database: "utilisateur"});
  const bodyP = require('body-parser');
  const file = require('express-fileupload')
  chemin = require('path');

module.exports = connexionbase;
