/* Variables globales se declaran dentro del archivo .js pero fuera de las funciones, dichas variables pueden ser llamadas por cualquier funcion */

let nombre = "WILLIAMS DE CARLOS";
var mensaje = "LA CONDICION NO SE CUMPLE";

function mostrarMensaje() {
    if (1==1) {
        document.write(nombre);
    } else {
        document.write(mensaje);
    }  
}

function alerta() {
    alert(nombre);
    const w = "julio";
}

/* las variables locales solamente pueden ser llamadas o utilizadas por la funcion que la declaro */

function texto() {
    var x = document.getElementById("txtNombre");
    x.value = x.value.toUpperCase();
}