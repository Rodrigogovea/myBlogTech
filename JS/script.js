// Seleccionar un elemento
const elemento = document.querySelector('.header__texto h2');
console.log(elemento);

// Modificar el elemento desde JS.
elemento.textContent = 'Nuevo elemento desde JS';


//seleccionar multiples elementos
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

enlaces[0].textContent = 'Nuevo texto';

//modificamos el enlace en la posición 0.


//getElementByID
const texto = document.getElementById('texto_head');
console.log(texto.textContent);


//generar un enalce 
const nuevoElemento = document.createElement('H3');
nuevoElemento.textContent = 'Contacta con el Govea';
nuevoElemento.classList.add('centrar-texto');


//Agregarlo al documento
const contenidoMain = document.querySelector('#principal');
contenidoMain.appendChild(nuevoElemento);

console.log(nuevoElemento);


let nombreForm = '';

//eventos
//asociar eventos a elementos del formulario.
const botonEnviar = document.querySelector('.boton--primario');
console.log(botonEnviar);
botonEnviar.addEventListener('click', function () {
    console.log('Enviadno datos');
});
// const botonEnviar = document.querySelector('.boton--primario');
// console.log(botonEnviar);
// botonEnviar.addEventListener('click', function () {
//     if(nombreForm === ''){
//         alert('El nombre no puede estar vació');
//     }
//     else
//     {
//         alert('enviadno datos');
//     }
// });

// const botonEnviar = document.querySelector('.boton--primario');
// console.log(botonEnviar);
// botonEnviar.addEventListener('click', function (evento) {
//     console.log(evento);
//     console.log('Enviando el formulario');
//     evento.preventDefault();
// });

//eventos del textInputs

// const nombre = document.querySelector('#nombre');
// nombre.addEventListener('input', function() {
//     console.log('Escribiendo');
//     console.log(evento.target.value);
// });


const nombre = document.querySelector('#nombre');
nombre.addEventListener('input', leerTexto);

function leerTexto(evento) {
    //console.log(evento.target.value);
    nombreForm = evento.target.value;
    console.log(nombreForm);
}


// const nombre = document.querySelector('#nombre');
// nombre.addEventListener('change', function() {
//     console.log('Escribiendo');
// });



// const nombre = document.querySelector('#nombre');
// nombre.addEventListener('change', function() {
//     console.log('Escribiendo');
// });

