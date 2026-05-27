import {Schema, model} from "mongoose"; //schema estaba mal escrito, se corrigio a Schema
 const esquemaNissan = new Schema({ //Schemma
NoEmpleado:Number,
Nombre:String,
Sueldo:Number
 })

 const esquemaPapeleria = new Schema({
Producto:String,
Stock:Number,
Precio:Number
 })

 const esquemaMetropolitana = new Schema({
Alumno:String,
Calificacion:Number,
Materia:String
 })

export const TablaNissan = new model("Nissan", esquemaNissan);
export const TablaPapeleria = new model("Tabla papeleria Ghandi", esquemaPapeleria);
export const TablaMetro = new model("Metropolitana", esquemaMetropolitana);

