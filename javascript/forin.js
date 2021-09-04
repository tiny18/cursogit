var persona = {
    nombre : "williams", //0
    edad : 30, //1
    sexo : "masculino", //2
}

for (var dato in persona) {
    document.write(dato + persona[dato]);
    document.write("<br>");
}