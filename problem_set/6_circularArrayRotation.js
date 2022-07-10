const circularArray = (array, vueltas) =>{
    if(vueltas < 0){
        return 'el numero de vueltas no debe ser menor a 0'
    }
    for(let i = 0; i <= vueltas -1; i++){
         console.log(array.push(array.shift()))
    }
    return array
}

const nums = [3, 4, 5]
console.log(circularArray(nums, 2));