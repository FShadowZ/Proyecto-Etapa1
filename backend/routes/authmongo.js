import  express from "express";
import User from '../models/User.js';
import CryptoJS from "crypto-js";

// resgisro

const router = express.Router()
router.post("/register1", async (req, res) => {
    const newUser = new User ({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
});
    try{    
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }


});

// LOGIN
router.post("/login1", async (req,res) => {
    try{

        const User = await User.findOne({username: req.body.username});
        !User && res.status(401).json("Credenciales erroneas");

        const hashedPassword = CryptoJS.AES.decrypt(
            User.password, 
            procces.env.PASS_SEC
            );


        const password = hashedPassword.toString(CryptoJS.enc.Utf8);

        password !== req.body.password &&
            res.status(401).json("Credenciales erroneas");

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }

});


export default router