const mysql = require('mysql');

const connexionbase = mysql.createConnection({host: "localhost",user: "root",password: "root",database: "utilisateur"});
  

module.exports = connexionbase;
