const contenidoMain = document.querySelector('.formulario');

let nombre = '';
let correo = '';
let mensaje = '';

const nombreForm = document.querySelector('#nombre');
const correoForm = document.querySelector('#email');
const mensajeForm = document.querySelector('#mensaje');

nombreForm.addEventListener('input',function(e){
    nombre = e.target.value;
});

correoForm.addEventListener('input',function(e){
    correo = e.target.value;
});

mensajeForm.addEventListener('input',function(e){
    mensaje = e.target.value;
});

const botonEnviar = document.querySelector('#btnEnviar');

botonEnviar.addEventListener('click', function (e) {
    e.preventDefault();
    if(nombre === ''){
        agregarError('nombre');
    }
    if(correo === ''){
        agregarError('e-mail');
    }
    if(mensaje === ''){
        agregarError('menaje');
    }
    else{
        formularioOk('Los datos han sido enviados correctamente.')
    }
});

function agregarError(campo){
    const mensajeError = document.createElement('P');
    mensajeError.textContent =`El campo ${campo} es obligatorio`;
    mensajeError.classList.add('mensaje__error','centrar-texto');
    contenidoMain.appendChild(mensajeError);
    setTimeout(() => {
        mensajeError.remove();
    },5000);
}

function formularioOk(msg){
    const mensaje = document.createElement('P');
    mensaje.textContent = msg;
    mensaje.classList.add('mensaje__ok','centrar-texto');
    contenidoMain.appendChild(mensaje);
    setTimeout(() => {
        mensaje.remove();
    },5000);
}
