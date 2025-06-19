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
//Bucles
for (var _i = 0, myList_1 = myList; _i < myList_1.length; _i++) {
    var value = myList_1[_i];
    console.log(value);
}
var myCounter = 0;
while (myCounter < myList.length) {
    console.log(myList[myCounter]);
    myCounter++;
}
// Clases
var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return MyClass;
}());
var myClass = new MyClass('Juan Carlos', 55);
console.log(myClass.name);
//Enum
var MyEnum;
(function (MyEnum) {
    MyEnum["DART"] = "dart";
    MyEnum["PYTHON"] = "python";
    MyEnum["SWIFT"] = "swift";
    MyEnum["JAVA"] = "java";
    MyEnum["KOTLIN"] = "kotlin";
    MyEnum["JAVASCRIPT"] = "javascript";
})(MyEnum || (MyEnum = {}));
var myEnum = MyEnum.DART;
console.log(myEnum);
var hero = {
    name: 'Batman',
    age: 39
};
function createHero(name, age) {
    return { name: name, age: age };
}
var batman = createHero('Batman', 39);
console.log(batman);
//Type from value
var address = {
    planet: 'Earth',
    city: 'Madrid'
};
var addresTwitch = {
    planet: 'Mars',
    city: 'Twitch'
};
console.log(addresTwitch);
//Type from function return
function createAddress() {
    return {
        planet: 'Tierra',
        city: 'Argentina'
    };
}
//type Address = ReturnType<typeof createAddress>
//Arrays
var language = [];
language.push("Java");
language.push("JavaScript");
language.push("C#");
language.push("Python");
language.push("Swift");
console.log(language);
console.log(typeof language);
//Matriz de 3 x 3
var board = [
    ['X', '', ''],
    ['', 'X', ''],
    ['', '', 'O']
];
var gameBoar = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', '', 'O']
];
console.log(gameBoar);
//Si no le decimos los valores que queremos en las celdas y la cantidad,
// el usuario puede escribir cualquier cosa las veces que quiera.
// Si queremos que sean fijas y que no sean mutables agregar readonly en su definicion
//Enums
var ERROR_TYPES;
(function (ERROR_TYPES) {
    ERROR_TYPES[ERROR_TYPES["NOT_FOUND"] = 0] = "NOT_FOUND";
    ERROR_TYPES[ERROR_TYPES["UNAUTHORIZED"] = 1] = "UNAUTHORIZED";
    ERROR_TYPES[ERROR_TYPES["FORBIDDEN"] = 2] = "FORBIDDEN";
})(ERROR_TYPES || (ERROR_TYPES = {}));
function mostrarMensaje(tipoDeError) {
    if (tipoDeError == ERROR_TYPES.NOT_FOUND) {
        console.log("No se encuentra el recurso");
    }
    else if (tipoDeError == ERROR_TYPES.UNAUTHORIZED) {
        console.log("No tiene permisos para acceder");
    }
    else if (tipoDeError == ERROR_TYPES.FORBIDDEN) {
        console.log("No tiene permisos para acceder");
    }
}
mostrarMensaje(1);
