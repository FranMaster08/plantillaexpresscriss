require('dotenv').config()

//importo el servidor 
const server=require('./app')

server.listen(process.env.PORT,()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
})