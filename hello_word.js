// Comentarios
/*
Otro tipo de comentarios
*/
console.log("Hola, Typescript!");
//variables
var myString = "Esto es mi cadena de texto";
//myString = 5 da error(concepto de tipado fuerte myString es de tipo string)  
console.log(myString);
var myString2 = "Otra cadena de texto";
myString2 = "Cambiando el valor de la cadena de texto";
console.log(myString2);
console.log(typeof myString2);
var myNumber = 7;
myNumber = myNumber + 3;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber - 1);
console.log(myNumber);
//------------------------
console.log(myString + " " + myNumber);
var myNumber2 = 8.5;
console.log(myNumber2);
console.log(typeof myNumber2);
console.log(myNumber + myNumber2);
var myBool = false;
myBool = true;
console.log(myBool);
console.log(typeof myBool);
//controles de flujo
if (myNumber == 10) {
    console.log('El valor es 10');
}
else {
    console.log('El valor no es 10');
}
