import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gyp"
})

//si hay un error de autenticación 
// ALTER USER 'ROOT'@'localhost' IDENTIFIED WITH mysql_native_password BY 'contraseña123';
app.get("/", (req,res)=>{
    res.json("Hola este es el backend")
})

app.get("/usuarios", (req,res)=>{
    const q = "SELECT * FROM usuarios"
    db.query(q,(err,data)=>
    {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, ()=>{
    console.log("connected to backend!")
})