import mongoose from "mongoose"; //mal escrito mongoose
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./Backend/Controllers/practica1.controllers.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(()=>console.log("Funciono la base de datos"))
.catch((error)=>console.log("No jalo")) //tenia un error de sintaxis, faltaba el parentesis de cierre
const app = express();
app.use(cors());
app.listen(1000,() => console.log("Funciona el servidor"))
test();

//notenia instalado mongoose, cors, express ni dotenv, se instalo con npm install mongoose cors express dotenv



