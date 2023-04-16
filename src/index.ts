import { Console, log } from "console";

console.log("Hola Juan");

// Declaracion de variables:

var nombre = "Martin";
let email = "quinojuan@gmail.com";

console.log("Hola, " + nombre);
console.log("¿Qué tal", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre}?`);

console.log(`El Email de ${nombre} es ${email}`);

const PI = 3.1416;

var error: boolean;
error = false;

console.log(`Hay error?: ${error}`);

// Instanciación múltiple de variables:

let a: string, b: boolean, c: number;
a = "TypeScript";
b = true;
c = 8.9;

// BuiltIn Types: number, string, boolean, void, null and undefined

// Tipos más complejos
let listaTareas: string[] = ["Tarea 1", "Tarea 2"];

// Lista de cadenas de texto:
let valores: (string | number | boolean)[] = [false, "hola", 56];

// Enumerados

enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

enum PuestoCarrera {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let estadoTarea: Estados = Estados.Incompleto;
let puestoMaraton: PuestoCarrera = PuestoCarrera.Primero;

console.log(estadoTarea);
console.log(puestoMaraton);

// Interfaces

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

// podemos crear variables que sigan la interface Tarea

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiente,
  urgencia: 10,
};

console.log(`Tarea: ${tarea1.nombre}`);

// Types de TypeScript
type Producto = {
  precio: number;
  nombre: string;
  anio: number;
};

let coche: Producto = {
  nombre: "Audi",
  precio: 45000,
  anio: 2011,
};

console.log(
  coche.anio > 2010
    ? `Coche: ${coche.nombre} es nuevo`
    : `Coche: ${coche.nombre} es viejo`
);

// Funciones

function saludar() {
  let nombre = "Martin";

  console.log(`Hola ${nombre}`);
}

saludar();

function saludarPersona(name: string) {
  console.log(`Hola, ${name}`);
}

saludarPersona("Sara");

function despedirPersona(nombre: string = "Pepe") {
  console.log(`Adios, ${nombre}`);
}

despedirPersona();
despedirPersona("vicente");

function despedidaOpcional(nombre?: string) {
  if (nombre) {
    console.log(`Adios, ${nombre}`);
  } else {
    console.log("Adios!");
  }
}

despedidaOpcional("carlos");

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
  if (apellidos) {
    console.log(`${nombre} ${apellidos} tiene ${edad} años`);
  } else {
    console.log(`${nombre} tiene ${edad} años`);
  }
}

variosParams("juan", undefined, 30);

function ejemploVariosTipos(a: string | number) {
  if (typeof a === "string") {
    console.log("A es un string");
  } else if (typeof a === "number") {
    console.log("a es un number");
  } else {
    console.log("a no es un string ni tampoco un number");
    throw Error("A no es un string ni un number");
  }
}

ejemploVariosTipos("juan");

function ejemploReturn(nombre: string, apellidos: string): string | number {
  // le puedo decir que devuelva o un string o un number
  return 3;
}

console.log(ejemploReturn("juan", "quino"));

/**
 * @param nombres es una lista de nobmres de string
 */

function ejemploMultipleParams(...nombres: string[]): void {
  // con este void estoy diciendo que no voy a devolver nada
  nombres.forEach((nombre) => console.log(nombre));
}

ejemploMultipleParams("Juan", "albo", "dani");

// ARROW Functions

type Empleado = {
  nombre: string;
  apellidos: string;
  edad: number;
};

let empleado = {
  nombre: "Juan",
  apellidos: "Quino",
  edad: 39,
};

const mostrarEmpleado = (empleado: Empleado): string =>
  `${empleado.nombre} tiene ${empleado.edad} años`;

  // llamamos a la funcion
  mostrarEmpleado(empleado)
  

  // este ejemplo no lo entendí, repasarlo.

  // const obtenerSalario = (empleado: Empleado, cobrar: () => "Cobrar") {
  //   if(empleado.edad > 70) {
  //     return
  //   } else {
  //     cobrar(); // callback a ejecutar
  //   }
  // }

  // Async Functions

  async function ejemploAsync(): Promise<string>{

    // Await
    await console.log("Tarea a completar antes de seguir con la secuencia de instrucciones")
    console.log("Tarea completada")
    return "Completado"
  }

  // Generators

  function* ejemploGenerator() {
    // yield --> para emitir valores

    let index = 0

    while(index < 5){
      // Emitimos un valor incrementado
      yield index++
    }
  }

  // Guardamos la funcion generadora en una variable

  let generadora = ejemploGenerator()

  // Accedemos a los valores emitidos

  console.log("---------------->",generadora.next().value)
  console.log("---------------->",generadora.next().value)
  console.log("---------------->",generadora.next().value)
  console.log("---------------->",generadora.next().value)
  console.log("---------------->",generadora.next().value)
  console.log("---------------->",generadora.next().value)