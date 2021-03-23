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


const productsInfoGet = ( req,res = response )=>{
    const {q, nombre} = req.query;
    res.json({
        "tipe":"get",
        q,
        nombre,
        "msg":'Hello World'});
}

const productsInfoPost = (req,res)=>{
    const {nombre, id} = req.body;
    res.json({
        "tipe":"post",
        nombre,
        id,
        "msg":"Hello World"});
}

const storesInfoGet = ( req,res = response )=>{
    const {q, nombre} = req.query;
    res.json({
        "tipe":"get",
        q,
        nombre,
        "msg":'Hello World'});
}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch,
    productsInfoGet,
    productsInfoPost,
    storesInfoGet
}