/*
  MÓDULO 03: FUNCIONES Y ARRAYS
  --------------------------------------------------
  Aquí aprenderemos a crear bloques de código reutilizables (Funciones)
  y a manejar listas de datos (Arrays) utilizando los métodos más modernos
  y recomendados del estándar ES6+ de JavaScript.
*/

console.log("=== 1. FUNCIONES TRADICIONALES VS FUNCIONES FLECHA ===");

// Función Tradicional
function saludarTradicional(nombre) {
    return "Hola, " + nombre + " (Función Tradicional)";
}
console.log(saludarTradicional("Estudiante"));

// Función Flecha (Arrow Function) - Sintaxis ES6+
// Son más cortas y tienen un comportamiento diferente con "this", 
// pero por ahora enfócate en su sintaxis limpia.
const saludarFlecha = (nombre) => {
    return `Hola, ${nombre} (Función Flecha)`; // Usamos Template Literals (Comillas invertidas)
};
console.log(saludarFlecha("Cristina"));

// Si la función flecha tiene una sola línea, podemos quitar las llaves y el 'return' (Retorno implícito)
const multiplicar = (a, b) => a * b;
console.log(`El resultado de 5 x 4 es: ${multiplicar(5, 4)}`);


console.log("\n=== 2. ARRAYS (ARREGLOS) Y MÉTODOS MODERNOS ===");

// Un Array es una colección de elementos.
const deportes = ["Fútbol", "Natación", "Básquet", "Tenis"];
console.log("Lista completa de deportes:", deportes);

// Cómo recorrer un Array a la manera antigua (Bucle FOR):

for (let i = 0; i < deportes.length; i++) {
    console.log("Deporte " + (i + 1) + ": " + deportes[i]);
}


// La manera moderna: FOREACH
// Ejecuta una función por cada elemento del Array.
console.log("- Usando forEach:");
deportes.forEach((deporte, indice) => {
    console.log(`Deporte ${indice + 1}: ${deporte}`);
});


console.log("\n=== 3. MÉTODOS DE ARRAYS: MAP, FILTER, REDUCE ===");
// Estos métodos son los más utilizados en frameworks modernos como React o Node.js.

const notasAlumnos = [7, 4, 9, 2, 8, 10];
console.log("Notas originales:", notasAlumnos);

// A) MAP: Transforma cada elemento de un Array y crea un NUEVO Array.
// Ejemplo: Sumarle 1 punto a cada nota.
const notasMejoradas = notasAlumnos.map((nota) => nota + 1);
console.log("Notas con 1 punto extra (map):", notasMejoradas);

// B) FILTER: Filtra los elementos según una condición y crea un NUEVO Array.
// Ejemplo: Obtener solo las notas aprobadas (mayores o iguales a 6).
const notasAprobadas = notasAlumnos.filter((nota) => nota >= 6);
console.log("Notas aprobadas (filter):", notasAprobadas);

// C) REDUCE: Reduce todo el Array a un único valor.
// Ejemplo: Sumar todas las notas para luego sacar un promedio.
// 'acumulador' guarda la suma parcial, 'notaActual' es el número actual que estamos iterando.
const sumaTotal = notasAlumnos.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
const promedio = sumaTotal / notasAlumnos.length;
console.log(`Suma total de notas: ${sumaTotal}`);
console.log(`Promedio de notas (reduce): ${promedio.toFixed(2)}`);
