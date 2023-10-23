import express from "express"
import authRoutes from "./routes/auth.js"
import usuariosRoutes from "./routes/usuarios.js"
import postRoutes from "./routes/posts.js"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/Backend/auth", authRoutes)
app.use("/Backend/usuarios", usuariosRoutes)
app.use("/Backend/posts", postRoutes)


//si hay un error de autenticación 
// ALTER USER 'ROOT'@'localhost' IDENTIFIED WITH mysql_native_password BY 'contraseña123';
app.get("/test", (req,res)=>{
    res.json("Hola este es el backend")
})

/*app.get("/usuarios", (req,res)=>{
    const q = "SELECT * FROM usuarios"
    db.query(q,(err,data)=>
    {
        if(err) return res.json(err)
        return res.json(data)
    })
})*/
app.listen(8800, ()=>{
    console.log("connected")
})