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
//constantes
var myConst = 'Mi propiedad constante';
console.log(myConst);
console.log(typeof myConst);
//controles de flujo
if (myNumber == 10) {
    console.log('El valor es 10');
}
else if (myNumber == 9) {
    console.log('El valor es 9');
}
else {
    console.log('El valor no es 10 ni 9');
}
//Funciones
function myFunction() {
    console.log('Mi funcion');
}
myFunction();
function sumTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(sumTwoNumbers(7, 8));
//List
var myList = ['Julian', 'Millen', '@jmillen'];
console.log(myList);
//Set
var mySet = new Set(["Julian", "Millen", "@jmillen", "Julian"]);
console.log(myList);
//Map
var myMap = new Map([['Julian', 26], ['Garces', 34]]);
myMap.set("JJJ27", 25);
console.log(myMap);
//bucles
for (var _i = 0, myList_1 = myList; _i < myList_1.length; _i++) {
    var value = myList_1[_i];
    console.log(value);
}
var myCounter = 0;
while (myCounter < myList.length) {
    console.log(myList[myCounter]);
    myCounter++;
}
