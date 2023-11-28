import express from "express";
import authRoutes from "./routes/auth.js";
import usuariosRoutes from "./routes/usuarios.js";
import postRoutes from "./routes/posts.js";
import animalRoutes from "./routes/animalRoutes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { createRequire } from "module";
import dotenv from "dotenv"
import usersRoute from "./routes/users.js";
import authmongoRoute from "./routes/authmongo.js";


dotenv.config();

const require = createRequire(import.meta.url);

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dbfranco:franco123@cluster0.8bqroil.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const mongoose = require("mongoose");

mongoose
    .connect(
        process.env.MONGO_URL
    )
    .then(()=> console.log("mongoDBConnection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.get("/api/test", ()=>{
        console.log("test is successfull")
})
// app.listen(5000,()=>{
//         console.log("soy mongodb")
// })

app.use("/Backend/auth", authRoutes);
app.use("/Backend/usuarios", usuariosRoutes);
app.use("/Backend/posts", postRoutes);
app.use('/api', animalRoutes);
app.use(express.json())
app.use("/api/users", usersRoute);
app.use("/api/authmongo", authmongoRoute);



app.get("/test", (req, res) => {
    res.json("Hola este es el backend");
});

app.listen(8800, () => {
     console.log("connected");
});
