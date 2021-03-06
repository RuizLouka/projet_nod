const api=express();
const express = require('express');
const bodyParser = require('body-parser');
const dataBase = require('./model/usermodel');



api.use(bodyParser.json());


api.use(bodyParser.urlencoded({ extended: true }));

api.use(express.static('public'));
app.use(formData.parse(options));

api.use(formData.format());

api.use(formData.union());

const userRoutes = require('./route/userroute');
api.use('/utilisateur', userRoutes());

const port = 3000;
api.listen(port, () => {
    console.log(`Le port est: ${port}.`)
});
api.use('/image', express.static('./image'));

dataBase.mongoose.connect(dataBase.url, {useNewUrlParser: true})
    .then(() => console.log('Connecte')).catch(error => console.log(error));
