import {db} from "../db.js";
import bcrypt  from "bcryptjs";
import  Jwt  from "jsonwebtoken";

export const register = (req,res)=>{
    // Chequear si existe el usuario
    const q = "SELECT * FROM usuarios WHERE rut = ? OR correo_electronico = ?";

    db.query(q, [req.body.username, req.body.email], (err, data)=> {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("El usuario ya está registrado");

        // Hash contraseña y crear un usuario
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO usuarios (rut, password, correo_electronico) VALUES (?)";
        const values = [
            req.body.username,
            hash,
            req.body.email // Asegúrate de recibir el correo electrónico del cuerpo de la solicitud
        ];

        db.query(q, [values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Su cuenta ha sido creada.");
        });
    });
};
export const login = (req, res) => {
    // Chequear si el usuario existe por RUT y correo electrónico
    const q = "SELECT * FROM usuarios WHERE rut = ? AND correo_electronico = ?";

    db.query(q, [req.body.rut, req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("Usuario no encontrado o datos no coinciden");

        // Verificar la contraseña
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if (!isPasswordCorrect) return res.status(400).json("Contraseña incorrecta");

        // Crear token y devolver datos del usuario
        const token = Jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];
        res.cookie("token_de_acceso", token, {
            httpOnly: true
        }).status(200).json(other);
    });
};
export const logout = (req,res)=>{
    
};