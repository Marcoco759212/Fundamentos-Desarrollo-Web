const jadenCasingStrings = (tweet) => {
    let array = tweet.split(" ")
    let nuevaFrase = ""

    for (let i = 0; i <= array.length - 1; i++) {
        nuevaFrase = nuevaFrase + " "
        for (let j = 0; j <= array[i].length - 1; j++) {
            if (j === 0) {
                nuevaFrase = nuevaFrase + (array[i].toUpperCase().charAt(j))
            } else {
                nuevaFrase = nuevaFrase + (array[i].toLowerCase().charAt(j))
            }
        }
    }
    return nuevaFrase
}

let tweet = "jaden smith es famoso"
console.log(jadenCasingStrings(tweet));