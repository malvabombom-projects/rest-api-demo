const { response } = require('express');

const usuariosGet = ( req,res = response )=>{
    const {q, nombre} = req.query;
    res.json({
        "tipe":"get",
        q,
        nombre,
        "msg":'Hello World'});
}

const usuariosPost = (req,res)=>{
    const {nombre, id} = req.body;
    res.json({
        "tipe":"post",
        nombre,
        id,
        "msg":"Hello World"});
}

const usuariosPut = (req,res)=>{
    const id = req.body.id;
    res.json({
        "tipe":"put",
        id,
        "msg":"Hello World"});
}


const usuariosDelete = (req,res)=>{
    res.json({
        "tipe":"delete",
        "msg":"Hello World"});
}

const usuariosPatch = (req,res)=>{
    res.json({
        "tipe":"Patch",
        "msg":"Hello World"});
}

const dataTodoLis = (req,res)=>{
    res.json({
        "title": "Dinamic To Do",
        "style": {
            "margin": 12345,
            "background": "John Doe",
            "text": "John Doe",
            "padding": "John Doe",
            "text-color": "John Doe",
            "font-size": "John Doe"
        },
        "demo": true,
        "person": {
            "id": 12345,
            "name": "John Doe"
            }
    });
}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
    dataTodoLis
}