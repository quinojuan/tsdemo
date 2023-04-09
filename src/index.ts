import { Console, log } from "console";

console.log("Hola Juan")

// Declaracion de variables:

var nombre = "Martin";
let email = "quinojuan@gmail.com"


console.log("Hola, " + nombre);
console.log("¿Qué tal", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre}?`)

console.log(`El Email de ${nombre} es ${email}`);

const PI = 3.1416;

var error: boolean;
error = false;

console.log(`Hay error?: ${error}`);

// Instanciación múltiple de variables:

let a:string, b:boolean, c:number;
a = "TypeScript";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null and undefined


// Tipos más complejos
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

// Lista de cadenas de texto:
let valores:(string | number | boolean)[] = [false, "hola", 56]

// Enumerados

enum Estados {
    "Completado" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Incompleto
let puestoMaraton: PuestoCarrera = PuestoCarrera.Primero;

console.log(estadoTarea)
console.log(puestoMaraton)


// Interfaces

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

// podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}

console.log(`Tarea: ${tarea1.nombre}`)

// Types de TypeScript
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    nombre: "Audi",
    precio: 45000,
    anio: 2011
}

console.log(coche.anio > 2010 ? `Coche: ${coche.nombre} es nuevo` : `Coche: ${coche.nombre} es viejo`)
