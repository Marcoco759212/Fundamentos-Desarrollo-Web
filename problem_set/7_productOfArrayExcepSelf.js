const productExceptSelf = (array) => {
    let arrayTotales = []
    let arrayJoin = []
    let total = 1
    let count = 0
    let countNewArray = 0
    while (countNewArray !== array.length) {
        let arrayPt1 = []
        let arrayPt2 = []

        // console.log('contador', count);
        // console.log('contdor2', countNewArray);
        if (countNewArray === 0) {
            if (count === 0) {
                arrayPt1 = array.slice(count + 1, array.length)
                // console.log(arrayPt1);
            }
            if (count === array.length) {
                arrayPt2 = array.slice(0, count - 1)
                // console.log(arrayPt2);
            }
            if (count !== 0 && count !== array.length) {
                arrayPt1 = array.slice(0, count)
                arrayPt2 = array.slice(count + 1, array.length)
                // console.log(arrayPt1);
                // console.log(arrayPt2);
            }

            // console.log('array 1',arrayPt1.length);
            // console.log('array 2',arrayPt2.length);

            arrayJoin.push([...arrayPt1, ...arrayPt2])
            // console.log('new array', arrayJoin);
        }

        if (count !== array.length - 1) {
            total = total * ((arrayJoin[countNewArray])[count])
        }

        if (count === arrayJoin[countNewArray].length) {
            arrayTotales.push(parseInt(total))
        }

        if (count === array.length - 1) {
            total = 1;
            count = 0;
            countNewArray++
        } else {
            count++
        }
    }
    return arrayTotales
}

const nums = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums));    


/*

const productExceptSelf2 = (array) => {
    let newArry = []
    let total = 1
    for(let i = 0; i <= array.length -1; i++){
        for(let j = 0; j <= array.length -1; j++){
            total = i !== j ? total * array[j] : total * 1;
        }
        newArry.push(parseInt(total))
        total = 1
    }
    return newArry
}

const nums = [-1,1,0,-3,3]
console.log(productExceptSelf2(nums));  

*/