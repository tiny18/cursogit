/* var color;

do {
    color = prompt ("Escribe un color"), "";
} while (color!="rojo"); */

//1.- Crear una variable llamada edad con un valor de 20
//2.- Crear una estructura if else
//3.- Si "if" edad es mayor a 10 
    //3.1 crear un ciclo for
    //3.2 inicializa una variable llamada a = 0
    //3.3 Crear la condicion si a menor o igual a 10, imprimir el valor de a y con un salto de linea
    //3.4 crear un contador en incremento
//4.- si la edad no es mayor a 10 crear un "else"
    //4.1 crear un ciclo for
    //4.2 inicializa una variable llamada b = 10
    //4.3 Crear la condicion si b es mayor o igual a 00, imprimir el valor de b y con un salto de linea
    //4.4 crear un contador en decremento

var edad = 5;

if (edad > 10) {
    for (a=0; a<=10; a++){
        document.write(a);
        document.write("<br>");
    }
} else { 
  for (b=10; b>=0; b-- ) {
      document.write(b);
      document.write("<br>");
      
  }
    
}