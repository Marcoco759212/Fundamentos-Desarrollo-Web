const filterPrime = (array) => {
    let newNums = []
    for (let i = 0; i <= array.length-1; i++) {
        array[i] !== 1 && array[i] % 2 === 1 ? newNums.push(array[i]) : console.log(array[i]);
    }
    return newNums
};

const nums = [1, 4, 5, 4, 7,11]

console.log(filterPrime(nums));