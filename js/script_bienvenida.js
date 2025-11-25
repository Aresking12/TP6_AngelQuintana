window.onload = function() {
    alert("¡Bienvenido al proyecto de multimedia!");

    let nombre = prompt("Ingresa tu nombre y apellido:");

    if(nombre === "" || nombre === null){
        nombre = "Usuario invitado";
    }

    document.getElementById("mensaje-bienvenida").textContent =
        "Hola " + nombre + ", ¡gracias por visitar nuestra página!";

    document.getElementById("nombreUsuario").textContent = nombre;
};
