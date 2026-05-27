import { TablaNissan } from "../Models/practica1.models.js";
import { TablaMetro } from "../Models/practica1.models.js"; //faltaba .js
import { TablaPapeleria } from "../Models/practica1.models.js";

// correccion en los corchetes
TablaNissan.create([
{
    NoEmpleado: 1,
    Nombre: "Patricio",
    Sueldo: 2000
},
{
    NoEmpleado: 2,
    Nombre: "Bob",
    Sueldo: 4000
}
]);
// correccion en los corchetes
TablaPapeleria.create([
{
    Producto: "pintura azul",
    Stock: 40,
    Precio: 20
},
{
    Producto: "pintura verde",
    Stock: 60,
    Precio: 20
},
{
    Producto: "pinceles",
    Stock: 100,
    Precio: 50
}
]);

// correccion en los corchetes
TablaMetro.create([
{
    Alumno: "Ricardo",
    Calificacion: 10,
    Materia: "Calculo"
},
{
    Alumno: "Estrella",
    Calificacion: 9,
    Materia: "PI"
},
{
    Alumno: "Alex",
    Calificacion: 9,
    Materia: "PozoleII"
},
{
    Alumno: "Arturo",
    Calificacion: 5,
    Materia: "Probabilidad"
}
]);

//nfaltaba la letra t
export const test = () => {
    console.log("Si se esta llamando al controlador");
};


