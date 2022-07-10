const lengthOfLastWord = (frase) => {
    const array = frase.split(" ")
    return array[array.length -1].length
};

const frase = 'Hello world'
console.log(lengthOfLastWord(frase))