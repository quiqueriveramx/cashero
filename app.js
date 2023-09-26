
// El arreglo de cuentas de demostración
let cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

// Variables para almacenar la cuenta de demostración seleccionada
let cuentaDemoSeleccionada = null;

function cargarDemo() {
    // Muestra las opciones de cuentas de demostración
    const cuentasDemo = document.querySelector(".cuentas-demo");
    cuentasDemo.style.display = "block";
}

// Función para seleccionar una cuenta de demostración
function seleccionarCuentaDemo(index) {
    cuentaDemoSeleccionada = cuentas[index];
    // Redirige a la página micajero.html con la cuenta de demostración seleccionada
    window.location.href = `micajero.html?nombre=${cuentaDemoSeleccionada.nombre}&saldo=${cuentaDemoSeleccionada.saldo}`;
}

// Variables para almacenar elementos DOM
const mensajeRecuperacionElement = document.getElementById("mensajeRecuperacion");
const registerContainer = document.getElementById("registerContainer");
const loginContainer = document.getElementById("loginContainer");

// Función para mostrar el formulario de registro
function mostrarRegistro() {
    registerContainer.style.display = "block";
    loginContainer.style.display = "none"; // Ocultar el formulario de inicio de sesión
}

function recuperarPassword() {
    mostrarMensaje("Ingresa tu correo electrónico para recuperar la contraseña:", mensajeRecuperacionElement);
    mensajeRecuperacionElement.innerHTML = `
        <input type="email" id="correo" placeholder="Correo electrónico"><br>
        <button onclick="enviarCorreoRecuperacion()">Enviar Correo</button>
    `;
}

function enviarCorreoRecuperacion() {
    const correo = document.getElementById("correo").value;
    mostrarMensaje(`Se ha enviado un correo de recuperación a ${correo}.`, mensajeRecuperacionElement);
}

function registrarUsuario() {
    const nuevoUsuario = document.getElementById("registroUsuario").value;
    const nuevaContrasena = document.getElementById("registroContrasena").value;

    if (nuevoUsuario && nuevaContrasena) {
        mostrarMensaje("Usuario registrado correctamente. Ahora puedes iniciar sesión.", mensajeRecuperacionElement);
        // Redirige a la página micajero.html con los parámetros de usuario, contraseña y saldo inicial
        window.location.href = `micajero.html?usuario=${nuevoUsuario}&contrasena=${nuevaContrasena}&saldo=0`;
    } else {
        mostrarMensaje("Por favor, ingresa un usuario y contraseña válidos.", mensajeRecuperacionElement);
    }
}

function ocultarRegistro() {
    registerContainer.style.display = "none";
    loginContainer.style.display = "block"; // Mostrar el formulario de inicio de sesión nuevamente
}

function mostrarMensaje(texto, elemento) {
    elemento.textContent = texto;
}
