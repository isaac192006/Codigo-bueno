import { TablaNissan } from "../Models/practica1.models.js";
import { TablaMetro } from "../Models/practica1.models";
import { TablaPapeleria } from "../Models/practica1.models.js";

TablaNissan.create({
NoEmpleado: 1,
Nombre:"Patricio", 
Sueldo: 2000
}
,
{
NoEmpleado: 2,
Nombre:"Bob", 
Sueldo: 4000 
}
)

TablaPapeleria.create({
Producto:"pintura azul",
Stock:40,
Precio:20
}

{
Producto:"pintura verde",
Stock:60,
Precio:20
}
,
{
Producto:"pinceles",
Stock:100,
Precio:50
}
)

TablaMetro.create({
Alumno:"Ricardo",
Calificacion:10,
Materia:"Calculo"
}
,
{
Alumno:"Estrella",
Calificacion:9,
Materia:"PI"
}
,
{
Alumno:"Alex",
Calificacion:9,
Materia:"PozoleII"
}
,
{
Alumno:"Arturo",
Calificacion:5,
Materia:"Probabilidad"
}
)

export const test = (()=>console.log("Si se esta llamando al controlador"));