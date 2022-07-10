const printOddOrEven = (cant, array, num) => {
    if (cant !== array.length) {
        return 'La longitud no coincide con el tamaño del arreglo'
    }

    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] < 0 || array[i] > 100) {
            return 'Existe un número que no está entre 0 y 100'
        }
    }

    let newNums = []

    for (let i = 0; i <= array.length - 1; i++) {
        if (num === 1) {
            array[i] % 2 === 1 ? newNums.push(array[i]) : console.log(array[i]);
        }
        if (num === 0) {
            array[i] % 2 === 0 ? newNums.push(array[i]) : console.log(array[i]);
        }
        if (num !== 0 && num !== 1) {
            return 'El numero para seleccionar los numeros pares o impares debe ser 1 o 0'
        }
    }
    return newNums
}

const nums = [1, 4, 5, 4, 6, 7, 8, 9, 10, 20, 25, 30, 35]

console.log(printOddOrEven(13, nums, 1));