var numeroX = 20;
var numeroY = 10;
var numerox = 20;

// > mayor

/* if (numero20 > numero10) {
    document.write("La variable 20 es mayor a la variable 10");
} */

// < menor

/* if (numero10 < numero20) {
    document.write("La variable 10 es menor a la variable 20");
} */

// >= mayor o igual

/* if (numero20 >= numerox) {
    document.write("La variable 20 es mayor o igual a la variable x");
} */

// 1.- crear una sentencia IF y crear dos variables con el valor 5 y 10, si la variable 5 es menor o igual a 10, imprimir el "mensaje es verdadero"

// Operador relacional IGUAL == puede comparar numeros y cadenas de texto

// Operador relacional DIFERENTE != puede comparar numeros y cadenas de texto

//Sentencia Else-If

//Esta condicion devuelve falso
/* if (10 > 20) {
    document.write("la variableX si es mayor a la variableY")
// si no
} else {
    document.write("la variable x no es mayor a la variable y");
} */
/* 
if ("Carlos" == "Williams") {
    document.write("Los nombres son iguales");
} */

var nombre1 = "williams";
var nombre2 = "carlos";

// el operador and && obliga a que las dos o mas condiciones sean verdaderas

//el operador or || espera que al menos una de las condiciones sea verdadero

/* if (nombre1 == nombre2 && 4 > 2) {
    document.write("Los nombres son iguales");
} else {
    document.write("Los nombres no son iguales");
} */

//1.- crear una variable con un valor entre 1 y 60
//2.- crear una estructura con la sentia if y else
//3.- crear una condicion en donde si la variable edad es menor o igual a 17, mostrar un mensaje diciendo que eres menor de edad
//4.- si la variable edad es mayor o igual a 18 o si la variable    edad es menor o igual 59
// 5.- Si la variable edad es mayor a 60, mostrar un mensaje diciendo "Eres un adulto mayor"

var edad = 60;

// and &&
// or ||

//si   30 es menor o igual 17
// >= mayor o igual
// <= menor o igual
// mayor >

if (edad <= 17) {
    document.write("Eres un joven");
} else if (edad >= 18 && edad <=59) {
    document.write("Eres un adulto");
} else if (edad > 59){
    document.write("Eres un adulto mayor");
}