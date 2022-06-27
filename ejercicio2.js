//ejercicio 2 convertidor de grados
const convert = (grados, unidad) => {
    let unit = unidad.toLowerCase();
    if(unit !== 'celsius' &&  unit !== 'fahrenheit'){
        return 'Error al ingresar la unidad de medida de los grados';
    }
    if(unit === 'celsius'){
      return `La conversion de ${grados} grados ${unidad} es: ${(grados * 9 / 5) + 32} grados Fahrenheit`;
    }
    if(unit === 'fahrenheit'){
      return `La conversion de ${grados} grados ${unidad} es: ${(grados - 32) * 5 / 9} grados Celsius`;
    }
  }
  console.log(convert(78.8,'FAHRENHEIT'));