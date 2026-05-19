/**
 * ARCHIVO: ejemploDOM.js
 * MÓDULO: 05 - Manipulación del DOM
 * OBJETIVO: Seleccionar elementos, modificarlos, crear nuevos y aplicar estilos dinámicos,
 * todo esto mediante Eventos (Clicks) para que el alumno vea el cambio en vivo.
 */

// Seleccionamos el contenedor principal donde inyectaremos nuestras modificaciones
const contenedor = document.getElementById("contenedor-dom");

/*
  1. ACCEDER Y MODIFICAR UN ELEMENTO EXISTENTE
*/
const btnModificar = document.getElementById("btn-modificar");
const parrafo = document.getElementById("parrafoOriginal");

btnModificar.addEventListener("click", () => {
    // Modificamos su contenido. 
    parrafo.innerHTML = "Este párrafo fue modificado al hacer <strong>CLIC</strong> en el botón. 🪄";
    // Le cambiamos el color y el tamaño dinámicamente
    parrafo.style.color = "#38bdf8";
    parrafo.style.fontSize = "1.2rem";
    parrafo.style.fontWeight = "bold";
});


/*
  2. CREAR UN NUEVO ELEMENTO (PÁRRAFO)
*/
const btnCrearP = document.getElementById("btn-crear-p");

btnCrearP.addEventListener("click", () => {
    // Paso 1: Creamos la etiqueta en memoria
    const nuevoParrafo = document.createElement("p");
    
    // Paso 2: Le asignamos contenido
    nuevoParrafo.textContent = "Este es un párrafo completamente nuevo, creado desde cero con JS.";
    
    // Paso 3: Modificamos el estilo
    nuevoParrafo.style.color = "#a78bfa"; // Morado claro
    nuevoParrafo.style.fontSize = "1.1rem";
    nuevoParrafo.style.marginTop = "1rem";
    nuevoParrafo.style.borderLeft = "4px solid #8b5cf6";
    nuevoParrafo.style.paddingLeft = "10px";
    
    // Paso 4: Lo inyectamos en el DOM
    contenedor.appendChild(nuevoParrafo);
});


/*
  3. CREAR UN TÍTULO H2
*/
const btnCrearH2 = document.getElementById("btn-crear-h2");

btnCrearH2.addEventListener("click", () => {
    const nuevoTitulo = document.createElement("h2");
    nuevoTitulo.textContent = "Título Dinámico H2";
    
    // Agregando estilos
    nuevoTitulo.style.color = "#facc15"; // Amarillo
    nuevoTitulo.style.fontSize = "2rem";
    nuevoTitulo.style.marginBottom = "1rem";
    nuevoTitulo.style.marginTop = "2rem";
    nuevoTitulo.style.borderBottom = "1px dashed #facc15";
    
    contenedor.appendChild(nuevoTitulo);
});


/*
  4. CREAR Y CONFIGURAR UNA IMAGEN
*/
const btnCrearImg = document.getElementById("btn-crear-img");

btnCrearImg.addEventListener("click", () => {
    const nuevaImagen = document.createElement("img");
    
    // Configuramos los atributos de la imagen
    nuevaImagen.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    nuevaImagen.alt = "Logo de Google creado dinámicamente";
    
    // Estilos de la imagen
    nuevaImagen.style.width = "150px";
    nuevaImagen.style.marginTop = "1rem";
    nuevaImagen.style.borderRadius = "8px";
    nuevaImagen.style.padding = "10px";
    nuevaImagen.style.backgroundColor = "white"; 
    nuevaImagen.style.display = "block"; // Para que aparezca en una nueva línea
    
    contenedor.appendChild(nuevaImagen);
});

console.log("¡Archivo DOM cargado! Haz clic en los botones para ver la magia.");
