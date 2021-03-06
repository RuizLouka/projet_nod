const app = () => {
    const router = require('express').Router();
    const utilisateur = require('../controlleur/usercontrolleur');

    
    router.delete('/:userid', utilisateur.deletes);
   
    router.get('/', utilisateur.findAll);

    router.put('/:userid', utilisateur.update);

    router.get('/:userid', utilisateur.find);
    
    router.put('/:userid', utilisateur.update);
    
    router.post('/', utilisateur.create);

    
    return router;
};

module.exports = app;
