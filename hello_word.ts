
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