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