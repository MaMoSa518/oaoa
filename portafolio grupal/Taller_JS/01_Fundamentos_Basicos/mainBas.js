
// 1. TIPOS DE DATOS Y CONSOLA
// En JS tenemos distintos tipos de datos. La consola nos ayuda a ver su valor y tipo.
let prenda = "roja"; // String (texto)
console.log("Color de prenda:", prenda); 

console.log("Esta es la consola 😍"); 
console.log('También puedes usar comillas simples para los string');
console.log(120);    // Number (Número entero)
console.log(20.3);   // Number (Número decimal, usando punto)
console.log(36, 3);  // Pasando múltiples parámetros separados por coma
console.log(true);   // Boolean (Verdadero o falso)


// 2. REGLAS PARA VARIABLES
// - Usar camelCase (ej: nombreDeUsuario)
// - Nombres descriptivos (que indiquen qué guardan)
// - Evitar ñ, tildes o caracteres especiales
let nombreEstudiante = "Matilda";
// let x = 35; // MAL: 'x' no nos dice nada sobre el dato
let edad = 35; // BIEN: claro y descriptivo


// 3. CONCATENACIÓN VS TEMPLATE LITERALS
// Unir texto y variables.

// Forma antigua (Concatenación con +):
console.log("El usuario: " + nombreEstudiante + " tiene " + edad + " años.");
// Forma moderna ES6+ (Template Literals con ``):
console.log(`El usuario: ${nombreEstudiante} tiene ${edad} años.`);


// 4. INTERACCIÓN CON EL USUARIO (PROMPT)
// prompt() abre una ventana pidiendo un dato. 
// ¡Ojo! Todo lo que entra por prompt es un String (texto), incluso si escribes números.

// Para evitar detener la ejecución de este archivo si se recarga mucho, comentamos los prompts:
// let numero1 = prompt("Ingrese un número");
// let numero2 = prompt("Ingrese un segundo número"); 
// 
// // Si sumamos "5" + "5", JS lo concatena y da "55", no 10.
// let resultado = numero1 + numero2; 
// console.log("Suma como texto:", resultado); // Muestra "55"
//
// // SOLUCIÓN: Convertir el string a número usando Number() o parseInt()
// let resultadoCorrecto = Number(numero1) + Number(numero2);
// console.log("Suma real:", resultadoCorrecto); // Muestra 10


// 5. OPERADORES ARITMÉTICOS
// Sumas (+), Restas (-), Multiplicaciones (*), Divisiones (/) y Módulo (%)
const resultadoDivision = 50 / 3;
console.log("División:", resultadoDivision);

const resultadoModulo = 50 % 3; // El resto de la división (muy útil para saber si un número es par/impar)
console.log("Resto de la división (Módulo):", resultadoModulo);

const operacionCompleja = 2 * (100 / 5) + 10; // Se resuelven primero los paréntesis
console.log("Operación con paréntesis:", operacionCompleja);


// 6. OPERADORES RELACIONALES (Comparaciones)
// Devuelven 'true' o 'false'
console.log("¿10 es menor que 20?:", 10 < 20);

// == compara valor sin importar el tipo
console.log("10 == '10' (Doble igual):", 10 == "10"); // true

// === compara valor Y tipo de dato (Recomendado siempre usar este)
console.log("10 === '10' (Triple igual):", 10 === "10"); // false (uno es Number, otro es String)

console.log("10 != 5 (Distinto de):", 10 != 5); // true


// 7. OPERADORES LÓGICOS
// && (AND - Y): Todas las condiciones deben ser verdaderas
// || (OR - O): Al menos una condición debe ser verdadera
// ! (NOT - NO): Invierte el valor (true a false)
let ambosVerdaderos = true && true; 
console.log("true && true:", ambosVerdaderos);

let num1 = 1;
let num2 = 2;
let evaluacionAnd = (num1 === 1) && (num2 === 2);
console.log("¿Num1 es 1 Y Num2 es 2?:", evaluacionAnd); // true
