'use strict'

/* Vamos a crear una función de fecha para verificar si una persona puede conducir o no
La función va a recibir dos argumentos (nombre y edad) y va a retornar un cadena de caracteres (utilicemos template strings)
que va a decir si la persona puede conducir o no */
const puedeConducir = (nombre, edad) => {
	// Tu código va aquí
}
console.log({ puedeConducir: puedeConducir('Juan', 23) })

/* Vamos a crear una función para convertir  una temperatura de Celsius a Fahrenheit
La función va a recibir dos argumentos (grados y tipo de unidad que pueden ser Fahrenheit o Celsius)
Vamos a evaluar si el tipo de unidad es Fahrenheit o Celsius, 
Si es Celsius vamos a convertir a Fahrenheit y si es Fahrenheit vamos a convertir a Celsius y en caso de que no uno ni otro, vamos a retornar un mensaje de error
La función va a retornar un cadena de caracteres que va a decir la cantidad de grados en el tipo de unidad que se le pase
La fórmula para convertir de Celsius a Fahrenheit es: (grados * 9 / 5) + 32
La fórmula para convertir de Fahrenheit a Celsius es: (grados - 32) * 5 / 9 */