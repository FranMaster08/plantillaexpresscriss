//Requerimos libreria express
const express=require('express')
//Creamos una instancia de express
const app=express()

//configuramos el servidor para lea BODY's en application-json
app.use(express.json())

//Agregamos las rutas
app.use('/user',require('./router/user.routes'))
app.use('/autos',require('./router/autos.routes'))

module.exports=app




