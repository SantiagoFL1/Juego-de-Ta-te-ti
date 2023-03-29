const express = require('express')
const app = express()
//const router = require('./Rutas/Rutas')
const path = require('path')


app.set('port','3000')
//middleware
//app.use(router)
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'./Vistas/PC.html'))
})
app.get('/1vs1', (req,res)=>{
    res.sendFile(path.join(__dirname,'./Vistas/1vs1.html'))
})
//server listening
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto '+app.get('port'))
})
