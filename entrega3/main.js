const express = require ('express');

const app = express ()

console.log (app)

const PORT = 8080;

//Aca el '/' nos indica la ruta donde se va a mostrar lo que se encuentra dentro de la funcion callback. (el clg en este caso.)
// Si el '/' estariamos mandando info del  'home' del local host. si agregamos '/contact' estariamos mandando info a localhost:8080/contact

app.get ('/', (req,res)=> {
    res.send('<h1 style="color:blue">Hola mundo desde Express</h1>')
})


let visitas = 0;
app.get ('/visitas', (req,res) => {
    visitas++;
    res.send(`la cantidad de visitas es ${visitas}`);   
})

app.get ('/fyh', (req,res) => {
    const now = new Date()
    const fyh = now.toLocaleString()
    res.json({fyh}) 
})

app.listen (PORT, ()=> {
    console.log (`Servidor corriendo en el puerto ${PORT} `)
})

//Para hacer funcionar nodemon hay que ejecutar el comando npm start en la terminal.