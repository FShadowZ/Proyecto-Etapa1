import express from "express";
import authRoutes from "./routes/auth.js";
import usuariosRoutes from "./routes/usuarios.js";
import postRoutes from "./routes/posts.js";
import animalRoutes from "./routes/animalRoutes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/Backend/auth", authRoutes);
app.use("/Backend/usuarios", usuariosRoutes);
app.use("/Backend/posts", postRoutes);
app.use('/api', animalRoutes);

app.get("/test", (req, res) => {
    res.json("Hola este es el backend");
});

app.listen(8800, () => {
    console.log("connected");
});
