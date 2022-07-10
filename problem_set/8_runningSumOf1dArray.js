const runningSum = (array) =>{
    let newArry = []
    let total = 0
    for(let i = 1; i <= array.length; i++){
        total = total + parseInt(array.slice(i-1, i))
        newArry.push(total)
    }
    return newArry
}

const nums = [ 1,1,1,1,1 ]
console.log(runningSum(nums));