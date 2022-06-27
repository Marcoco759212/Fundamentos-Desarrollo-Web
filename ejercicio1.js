//Ejercicio 1 puede conducir o no
const puedeConducir = (nombre, edad) => {
	return `${nombre} tiene ${edad} de edad, ${edad < 18 ? 'no' : 'si'} puede conducir`
}
console.log(puedeConducir('Juán', 17))