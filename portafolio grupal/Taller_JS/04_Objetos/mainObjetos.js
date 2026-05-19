/*
  MÓDULO 04: OBJETOS
  --------------------------------------------------
  Aquí aprenderemos a modelar datos del mundo real utilizando "Objetos".
  Los objetos nos permiten agrupar información relacionada usando 
  una estructura de "clave: valor".
*/

console.log("=== 1. CREANDO OBJETOS LITERALES ===");

// En lugar de tener variables sueltas como 'nombre', 'edad', 'curso',
// agrupamos todo dentro de un solo Objeto Literal.
const estudiante = {
    nombre: "Ana García",
    edad: 18,
    curso: "Desarrollo Web Frontend",
    aprobado: true,
    // Los objetos pueden contener otros objetos adentro (Objetos anidados)
    contacto: {
        email: "ana@email.com",
        telefono: "123-456-7890"
    }
};

console.log("Objeto Estudiante completo:", estudiante);

// Acceder a los valores usando la "notación de punto"
console.log(`Nombre: ${estudiante.nombre}`);
console.log(`Email de contacto: ${estudiante.contacto.email}`);

// También se pueden modificar propiedades existentes o agregar nuevas:
estudiante.edad = 19; // Modificando
estudiante.escuela = "IPET 379"; // Agregando nueva propiedad
console.log(`Edad actualizada: ${estudiante.edad}`);


console.log("\n=== 2. MÉTODOS EN OBJETOS ===");

// Los métodos son simplemente funciones que pertenecen a un objeto.
// Describen el "comportamiento" o las "acciones" de ese objeto.
const carrito = {
    producto: "Zapatillas Deportivas",
    precio: 15000,
    cantidad: 2,
    // Esto es un método:
    calcularTotal: function() {
        // La palabra reservada 'this' hace referencia al objeto mismo (carrito).
        // Nos permite acceder a las propiedades del mismo objeto.
        return this.precio * this.cantidad;
    }
};

console.log(`Producto: ${carrito.producto}`);
console.log(`Total a pagar: $${carrito.calcularTotal()}`);


console.log("\n=== 3. DESESTRUCTURACIÓN DE OBJETOS (ES6+) ===");

// La desestructuración (Destructuring) es una forma rápida de "sacar" 
// variables de un objeto sin tener que usar 'objeto.propiedad' a cada rato.

const profesor = {
    nombreProfe: "Cristina Maia",
    materia: "Programación III",
    turno: "Mañana"
};

// Antes lo hacíamos así:
// const nombreProfe = profesor.nombreProfe;
// const materia = profesor.materia;

// ¡Ahora con ES6+ lo hacemos en una sola línea!
const { nombreProfe, materia, turno } = profesor;

console.log(`La profesora ${nombreProfe} enseña ${materia} en el turno ${turno}.`);

// Esto es sumamente útil cuando trabajamos con APIs y recibimos mucha información.
