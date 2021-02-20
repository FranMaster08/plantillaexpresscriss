const express =require('express')
const app=express.Router()

//http:localhost:3000/user
app.get('/',(req,res)=>{
    res.status(200).json({succes:true,mensaje:'Hola Mundo'})
})

// http:localhost:3000/user/agregarUsuario
app.get('/agregarUsuario',(req,res)=>{
    res.status(200).json({succes:true,mensaje:'Hola Mundo'})
})

module.exports=app




