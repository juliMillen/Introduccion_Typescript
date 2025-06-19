
// Comentarios

/*
Otro tipo de comentarios
*/

console.log("Hola, Typescript!")

//variables
var myString = "Esto es mi cadena de texto"
//myString = 5 da error(concepto de tipado fuerte myString es de tipo string)  
console.log(myString)

let myString2 = "Otra cadena de texto"
myString2 = "Cambiando el valor de la cadena de texto"
console.log(myString2)
console.log(typeof myString2)

let myNumber = 7
myNumber = myNumber + 3
console.log(myNumber)
console.log(typeof myNumber)
console.log(myNumber - 1)
console.log(myNumber)

//------------------------
console.log(myString + " " + myNumber)

let myNumber2 = 8.5
console.log(myNumber2)
console.log(typeof myNumber2)

console.log(myNumber + myNumber2)

let myBool: boolean = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

//constantes

const myConst = 'Mi propiedad constante'
console.log(myConst)
console.log(typeof myConst)


//controles de flujo

if(myNumber == 10){
    console.log('El valor es 10')
} else if(myNumber == 9){
    console.log('El valor es 9')
}
else{
    console.log('El valor no es 10 ni 9')
}



//Funciones

function myFunction(){
    console.log('Mi funcion')
}

myFunction()

function sumTwoNumbers(firstNumber: number, secondNumber:number){
    return firstNumber + secondNumber
}

console.log(sumTwoNumbers(7,8))

//List

let myList: Array<string> = ['Julian','Millen','@jmillen']
console.log(myList)

//Set

let mySet: Set<string> = new Set(["Julian","Millen","@jmillen","Julian"])
console.log(myList)


//Map

let myMap:Map<string,number> = new Map([['Julian',26],['Garces',34]])
myMap.set("JJJ27",25)
console.log(myMap)


//Bucles

for (const value of myList){
    console.log(value)
}

let myCounter = 0

while (myCounter < myList.length){
    console.log(myList[myCounter])
    myCounter++
}

// Clases

class MyClass {
    name:string
    age:number

    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass('Juan Carlos',55)
console.log(myClass.name)

//Enum

enum MyEnum {
    DART = 'dart',
    PYTHON = 'python',
    SWIFT = 'swift',
    JAVA = 'java',
    KOTLIN = 'kotlin',
    JAVASCRIPT = 'javascript'
}

const myEnum = MyEnum.DART
console.log(myEnum)



//Type Alias

type Hero = {
    name: string
    age: number
}

let hero:Hero = {
    name: 'Batman',
    age: 39
}

function createHero(name:string, age:number):Hero {
    return {name,age}
}

const batman = createHero('Batman',39)
console.log(batman)

//Type from value

const address = {
    planet: 'Earth',
    city: 'Madrid'
}

type Address = typeof address

const addresTwitch: Address = {
    planet: 'Mars',
    city: 'Twitch'
}

console.log(addresTwitch)


//Type from function return

function createAddress(){
    return {
        planet: 'Tierra',
        city: 'Argentina'
    }
}

//type Address = ReturnType<typeof createAddress>


//Arrays

const language : string[] = []
language.push("Java")
language.push("JavaScript")
language.push("C#")
language.push("Python")
language.push("Swift")

console.log(language);
console.log(typeof language);

//Matrices

type CellValue = 'X' | 'O' | ''
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
    [CellValue, CellValue, CellValue]
]

const gameBoar:GameBoard = [
    ['X','O','X'],
    ['O','X','O'],
    ['X','','O']
]
console.log(gameBoar)

//Si no le decimos los valores que queremos en las celdas y la cantidad,
// el usuario puede escribir cualquier cosa las veces que quiera.

