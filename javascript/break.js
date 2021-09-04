
for (a=0; a<=10; a++) {
    document.write(a);
    document.write("<br>");
    var escribe = prompt("Dime si continuo", "si");
    //Si la variable escribe es igual a no, ejecutar la función de break;
    if (escribe == "no") {
        document.write("Se termino el ciclo");
        continue;
    }
}