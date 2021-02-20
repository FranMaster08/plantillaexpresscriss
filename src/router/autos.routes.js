const express=require('express')
const rutaAutos=express.Router()


//http:localhost:3000/autos
rutaAutos.get('/',(req,res)=>{
    res.status(200).json({mensaje:'Hola Autos'})
})

//http:localhost:3000/autos/agregarAutos
rutaAutos.get('/agregarAutos',(req,res)=>{
    res.status(200).json({mensaje:'Hola Autos'})
})

module.exports=rutaAutos