const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/user.controllers');

const router = Router();

router.get('/', usersGet)
        .put('/:id', usersPut )
        .post('/',[
            check('email', 'Not valid email').isEmail(),
            
        ], usersPost )
        .delete('/', usersDelete )
        .patch('/', usersPatch );

module.exports = router;