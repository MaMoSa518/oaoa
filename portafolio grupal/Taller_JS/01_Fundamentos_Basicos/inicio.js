/**
 * ARCHIVO: inicio.js
 * MÓDULO: 01 - Fundamentos Básicos
 * OBJETIVO: Entender cómo mostrar mensajes, declarar variables y usar Template Literals (ES6).
 */

// 1. alert() muestra un cuadro de diálogo en el navegador. (No abusar de él en proyectos reales)
alert("¡Bienvenido al Taller de JavaScript!");

/*
  2. VARIABLES EN ES6+
  - let: Permite declarar una variable cuyo valor puede cambiar después.
  - const: Permite declarar una variable cuyo valor NO puede cambiar (es constante).
  - ¡IMPORTANTE!: Ya NO usamos 'var' porque puede causar problemas en programas grandes 
    debido a que no respeta el "alcance de bloque" (block scope).
*/
let nombreUser = "Taty"; // Puede cambiar a otro nombre luego
const estado = false;    // Siempre será false en este programa

// 3. console.log() imprime mensajes en la consola (F12) del navegador. 
// \n sirve para hacer un salto de línea en texto normal.
console.log("Mensaje tradicional:\nBienvenido: " + nombreUser);

/* 
  4. TEMPLATE LITERALS (ES6+)
  Utilizamos comillas invertidas (backticks: ``).
  Nos permiten:
  - Dar saltos de línea escribiendo enter normalmente.
  - Interpolar (insertar) variables usando ${variable} sin necesidad de sumar con el signo +.
*/
console.log(`Mensaje moderno (Template Literals):
Bienvenido!!! 
${nombreUser}`); 

// 5. MÉTODOS DE TEXTO (Strings)
// .toUpperCase() convierte todo el texto a MAYÚSCULAS
console.log(`Bienvenido en mayúsculas: 
${nombreUser.toUpperCase()}`);

/* 
  6. OPERADOR TERNARIO
  Es como un 'if' resumido: (condición) ? 'valor si es verdadero' : 'valor si es falso'
*/
console.log(`Estado del usuario: ${estado ? "En línea" : "Desconectado"}`);

// Variables extra para demostrar (usando let en lugar de var)
let profesor = "Joseph";
let ayudante = "Patrix";
console.log(`Profesor: ${profesor}, Ayudante: ${ayudante}`);

alert("¡Iniciando consola de JavaScript, presiona F12!");
