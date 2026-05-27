import mongoose from "moongose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./Backend/Controllers/practica1.controllers";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(()=>console.log("Funciono la base de datos"))
.catch((error)=>console.log("No jalo"))
const app = express();
app.use(cors());
app.listen(1000,() => console.log("Funciona el servidor"))
test();

