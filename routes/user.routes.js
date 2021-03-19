const { Router } = require('express');
const { usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosDelete, 
        usuariosPatch} = require('../controllers/user.controller');

const user_router = Router();

user_router.get('/', usuariosGet);

user_router.post('/', usuariosPost);

user_router.put('/:id', usuariosPut);

user_router.delete('/', usuariosDelete);

user_router.patch('/', usuariosPatch);

module.exports = user_router ;