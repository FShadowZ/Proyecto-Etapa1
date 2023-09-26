import express from "express"
import postRoutes from "./routes/posts.js"

const app = express()
app.use(express.json())
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