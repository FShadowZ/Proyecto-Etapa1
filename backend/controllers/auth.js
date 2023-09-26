import {db} from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req,res)=>{
    //chequear si existe el usuario
    const q = "SELECT * FROM usuarios WHERE rut = ?"


    db.query(q,[req.body.rut, req.body.name], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("El rut ingresado ya está en uso")

        //hash contraseña y crear un usuario
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO usuarios (rut, password) VALUES (?)"
        const values = [
            req.body.username,
            hash,
        ]

        db.query(q, [values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Su cuenta ha sido creada.");
        })
    })
}
export const login = (req,res)=>{
    
}
export const logout = (req,res)=>{
    
}