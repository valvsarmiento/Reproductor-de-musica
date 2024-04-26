 // un string o cadena de texto es un conjunto de caracteres y se define con las comillas

 //Una constante o variable es un espacio en memoria para poder guardar datos

// String
const mensaje = "Instituto alfa carabobo"

 // dentro de javascript tenemos el tipo de dato number o tipo numerico que contiene los valores numericos se usa punto

// Number
const numero = 7 


 //Hace referencia a dos valores que son el true y el false (las palabras reservadas son)

//Boolean
const condicion = false

 // o arreglo es una lista de datos que se guardan en memoria de forma sucesiva se usa coma

//Array 
const mercado = [
"Tomates", 
"Lechugas",
"Salsa",
"Yogurt",
"Pan"
]

 //es un tipo de dato que permite guardan valores dentro de el pero asignando una clave especifica a cada valor

//Object 
const usuario = {
    email: 'pedro@outlook.com', 
    password: '1234*',
    username: 'pedrouwu32',
    address: {
        city: 'Valencia',
        estate: 'Carabobo',
        street: 'Madison',
        code: '404'  
    },
    children: [
        'Juanito',
        'Pancho'
    ]
}
 //no se cumple es similar a false
const indefinido = undefined

//no se cumple porque no esta correcto
const vacio = null 


// Estructuras condicionales 

if (true) {
console.log('se cumple')
}

else {
console.log('no se cumple')
}

//si aplicas un valor en una condicion validas si existe o no (el cero es nulo)

/**
 * OPERADORES LOGICOS
 *  &&   AND o tambien 'y'
 * ||    OR o tambien 'o'
 * =     Asignacion 
 * ==    Comparacion igual
 * !=    Desigualdad
 * >     Mayor
 * >=    Mayor o igual
 * <     Menor 
 * <=    Menor o igual 
 * OPERADORES MATEMATICOS
 * +     Suma o adicion
 * -     Resta o sustraccion
 * *     Multiplicacion
 * **    Potenciacion
 *  /    Division
 *  %
 */


//Una funcion es un bloque de codigo que contiene una serie de instrucciones o sentencias

//Una funcion tipo flecha recibe '()'parametros que son variables que existen dentro de la funcion

const suma = (num1, num2) => {
return num1 + num2

}

const validarUsuario = (usuario) => {

return 
usuario.email != undefined &&
usuario.password != undefined
}

 console.log(usuario)