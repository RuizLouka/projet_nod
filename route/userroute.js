const app = () => {
    const router = require('express').Router();
    const users = require('../controlleur/usercontrolleur');

    
    router.delete('/:userid', users.deletes);
   
    router.get('/', users.findAll);

    router.put('/:userid', users.update);

    router.get('/:userid', users.find);
    
    router.put('/:userid', users.update);
    
    router.post('/', users.create);

    
    return router;
};

module.exports = app;
