/* 
1.- Crear una variable llamada (lblNombre) y ahi almacenar el objeto label por medio de su id 
2.- Crear una varable llamada (nombre) y que tenga su nombre como valor
3.- generar una estructura do while
4.- dentro del do crear una variable llamada (ingresarNombre) y que almacene un valor ingresado por medio del prompt
5.- agregar la condicion de while variable nombre es diferente de la variable ingresarNombre
6.- dentro de la instruccion "do" renombrar la variable lblNombre con la variable ingresarNombre
*/
/* -------------------------------------------------- */

function calcular() {
    var txtsubtotal = document.getElementById("txtSubtotal").value;
    var txtiva = document.getElementById("txtIva").value;
    var txttotal = document.getElementById("txtTotal").value;
    var intSubtotal = parseFloat(txtsubtotal);
    var intIva = parseInt(txtiva);
    var intTotal = parseInt(txttotal);
    var resultado = intSubtotal + intIva + intTotal;
    alert("$" + resultado + "0");
}