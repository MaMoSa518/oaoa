/**
 * ARCHIVO: mainEstControl.js
 * MÓDULO: 02 - Estructuras de Control
 * OBJETIVO: Aprender condicionales (if/else), switch y bucles (while/for).
 */

/* 
  1. CONDICIONALES (IF / ELSE)
  Permiten al programa tomar decisiones basadas en una condición verdadera o falsa.
*/
// (Comentamos los prompts para no bloquear la pantalla cada vez que recargas)

let textUser = prompt("Escriba 'javascript'");

if (textUser.toLowerCase() === "javascript") {
    // Si la condición es verdadera
    console.log("¡Excelente! Escrito correctamente.");
} else {
    // Si la condición es falsa
    console.log("Debes corregir la escritura.");
}


/*
  2. parseInt() Y VALIDACIÓN DE NÚMEROS
  Lo que viene del prompt siempre es texto. Para comparar números matemáticamente,
  debemos convertirlos usando parseInt() o Number().
*/

let numUsuarioStr = prompt("Ingrese un número del 1 al 10");
let numUsuario = parseInt(numUsuarioStr); // Convertimos de String a Number

if (numUsuario <= 10) {
    console.log("¡Genial! El número es válido.");
} else {
    console.log("¡Error! El número es mayor a 10.");
}


/*
  3. SWITCH
  Es ideal cuando queremos evaluar múltiples valores posibles de una misma variable, 
  como en un menú de opciones.
*/
/*
let opcUser = prompt(`Elija una opción:
1: Libros
2: Películas
3: Juegos`);

switch (opcUser) {
    case "1":
        console.log("Elegiste Libros: Te recomendamos 'El Principito'.");
        break; // Detiene la evaluación para no seguir leyendo los demás casos
    case "2":
        console.log("Elegiste Películas: Te recomendamos 'Matrix'.");
        break;
    case "3":
        console.log("Elegiste Juegos: Te recomendamos 'Need For Speed'.");
        break;
    default:
        // Si no coincide con ninguno de los casos anteriores
        console.log("Opción no válida. Por favor, elige 1, 2 o 3.");
        break;
}
*/

/*
  4. BUCLES: WHILE (MIENTRAS)
  Repite un bloque de código MIENTRAS la condición sea verdadera.
*/
// Ejemplo básico comentado:
/*
let contador = 1;
while (contador <= 10) {
    console.log(`Número actual: ${contador}`);
    contador++; // Equivale a: contador = contador + 1 (Suma 1 en cada vuelta)
}
console.log("Fin del bucle básico.");
*/

/*
  5. EJERCICIO INTEGRADOR: ADIVINA EL NÚMERO
  Uso de Math.random() para generar un número aleatorio, condicionales y un bucle while
  para darle 3 vidas al usuario.
*/

// Math.random() genera un número entre 0 y 0.99
// Multiplicando y redondeando logramos un número del 1 al 10
const numeroMaquina = Math.floor(Math.random() * 10) + 1;
// console.log("HACK: El número de la máquina es", numeroMaquina); // (Descomentar para hacer trampa)

let vidas = 3;
// (Descomenta estas líneas si deseas probar el juego interactivo)
/*
let intentoUsuario = parseInt(prompt('Adivina el número del 1 al 10 (Tienes 3 vidas)'));

// Mientras el número sea incorrecto Y nos queden vidas (mayor a 0):
while (numeroMaquina !== intentoUsuario && vidas > 1) {
    // Restamos una vida porque se equivocó
    vidas--;

    // Operador ternario para dar pistas: si el numMaquina es mayor al ingresado, decimos "es mayor"
    let pista = (numeroMaquina > intentoUsuario) ? "El número a adivinar es MAYOR" : "El número a adivinar es MENOR";
    
    // Mostramos error y pista, y volvemos a preguntar
    intentoUsuario = parseInt(prompt(`¡Te equivocaste! ${pista}.\nTe quedan ${vidas} vidas. Intenta de nuevo:`));
}

// Fuera del bucle, evaluamos por qué salió (¿Ganó o se quedó sin vidas?)
if (numeroMaquina === intentoUsuario) {
    console.log(`¡Ganaste 😍! El número era ${numeroMaquina}`);
} else {
    console.log(`Perdiste 🤔. Te quedaste sin vidas. El número era ${numeroMaquina}`);
}
*/
