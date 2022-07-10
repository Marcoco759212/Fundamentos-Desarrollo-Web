const susanaDistancia = (num, tels) => {
    
    const array = tels.split('\n')
    // console.log(array);
    if (num !== array.length) {
        return "El número ingresado no coincide con la cantidad de elementos en la lista"
    }

    let newArray = []
    let repetidos = []
    let finalArray = []
    let ultimateFinalArray = []
    let count = 0
    let position = 0
    let position2 = 0
    let position3 = 0
    let tmp = 0
    let tmp2 = 0
    let flag = false
    let finalyFlag = false
    let ultimateFinalyFlag = false
    
    while (flag !== true) {
        // console.log('-------vuelta--------', count);
        if (count < num) {
            newArray.push([array[count], count + 1])
        }

        if (count > num && finalyFlag !== true) {
            // console.log()
            // console.log('position->', position)

            if (array.length === 0) {
                finalyFlag = true
                tmp = 0
                position = 1
            }

            if (position >= array.length) {
                // console.log('reset position');
                position = 0
            }

            if (position === 0 && finalyFlag !== true) {
                tmp = array[position]
                array.shift()
            }
            // console.log('valor tmp->', tmp);

            if (tmp === array[position] && tmp !== undefined) {
                console.log('nuevo array', array);
                repetidos.push(tmp)
                // console.log('array repetidos', repetidos);
                tmp = 0
                position = -1
            }
            position++
        }

        if (finalyFlag === true && ultimateFinalyFlag !== true) {
            // console.log(`Entrnado al final posicion2 ${position2} y posicion3 ${position3}`);
            if(repetidos[position2] === newArray[position3][0]){
                // console.log(`Validando ${repetidos[position2]} y ${newArray[position3][0]}`);
                // console.log(`valor de ${newArray[position3][0]}`,newArray[position3][1]);
                tmp = +tmp + parseInt(newArray[position3][1])
                tmp2 += 1
                // console.log('tmp value', tmp);
            }

            if(position3 >= num -1){
                finalArray.push([parseInt(repetidos[position2]), tmp, tmp2])
                tmp = 0
                tmp2 = 0
                position2++
                position3 = -1
                
            }

            if(finalArray.length >= repetidos.length){
                ultimateFinalyFlag = true
                tmp = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                tmp2 = 0
                position = 0
            }
            position3++
        }

        if(ultimateFinalyFlag === true){
            // console.log('Valor tmp',tmp)
            // console.log('Valor position',position)
            if(finalArray[position][2] >= tmp2){
                if(finalArray[position][1] < tmp){
                    ultimateFinalArray.shift()
                    ultimateFinalArray = finalArray[position]
                    tmp2 = finalArray[position][2]
                    tmp = finalArray[position][1]
                    //console.log('valor mínimo',tmp)
                }
            }
            

            if(position >= finalArray.length -1){
                flag = true
            }
            position++
        }

        // if (count > 50) {
        //     flag = true
        // }

        count++
    }
    // console.log(finalArray);
    // console.log(newArray);
    // console.log({ultimateFinalArray})
    return `${ultimateFinalArray[2]} ${ultimateFinalArray[0]}`
};

const tels = `12345
65432
11223
65432
98765
12345
11223`

const tels2 = `12345
65432
11223
65432
98765
12345
11223
12345
65432
11223
65432
98765
12345
11223`

const tels3 = `12345
65432
11223
65432
98765
12345
11223
12345
65432
11223
65432
98765
12345
11223
12345
65432
11223
65432
98765
12345
11223
65432
12345
11223
65432
98765
12345
11223`

console.log(susanaDistancia(28, tels3));
//console.log(susanaDistancia(14, tels2));
