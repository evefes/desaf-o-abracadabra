const express = require("express")
const app = express()

app.listen(3000,() => {
    console.log("El servidor se inicio en el puerto 3000")
});

const usuarios = {
    "usuarios":
    [
        "Juan",
        "Jocelyn",
        "Astrid",
        "Maria",
        "Ignacia",
        "Javier",
        "Brian" 
    ]
}

// abracadabra/usuarios -> JSON
app.get("/abracadabra/usuarios",(req, res) => {
    res.send(usuarios)
})

// assets como publica
app.use(express.static("assets"));

//midleware para filtrar ruta //abracadabra/juego/usuario

app.use("/abracadabra/juego/usuario", (req, res, next) => {
    const usuario = req.params.usuario

    if ( usuarios.usuarios.find(data => data == usuarioReq) ) {
        next()
    }else {
        res.sendFile(__dirname + "/assets/who.jpeg")
    }
})


// ruta abracadabra/juego/usuario
app.get("/abracadabra/juego/usuario", (req, res) =>{
    res.sendFile( __dirname + "/index.html")
})


app.get("abracadabra/conejo/:n", (req, res) => {
   const numeroUsuario = req.params.n
   const numeroConejo = Math.floor(Math.random() * 4 ) + 1;

   if (numeroConejo == numeroUsuario) {
    res.sendFile(__dirname + "/assets/conejito.jpeg")
 }else{
    res.sendFile(__dirname + "/assets/voldemort.jpeg")
    }
})

app.get("*", (req, res) => {
    res.send("Esta pagina no existe")
})
