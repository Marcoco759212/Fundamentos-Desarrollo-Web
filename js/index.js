// Iteracion 1: Creacion de variables e impresión
const hacker1 = 'Marco';
console.log(`El nombre del driver es: ${hacker1}`)
const hacker2 = 'Marco';
console.log(`El nombre del navegador es: ${hacker2}`)

// Iteration 2: Condicionales
var h1Length = hacker1.length;
var h2Length = hacker2.length;
console.log(
    h1Length === h2Length ?
        `Alá, ambos nombres tienen los mismos ${h1Length} carácteres!` :
        h1Length > h2Length ? 
            `El Driver tiene el nombre mas largo, con ${h1Length} letras.` :
            `Parece ser que el navigator tiene el nombre mas largo, con ${h2Length} letras.`
)

// Iteracion 3: Loops
console.log(hacker1.split('').join(' ').toUpperCase())

let acumulador = ''
for(let it = h2Length; it>=0; it--){
   acumulador += hacker2.charAt(it)
}
console.log({ acumulador })

const array = [hacker1, hacker2]

console.log(
    hacker1 === hacker2 ?
        'What?! Ambos tienen el mismo nombre?':
        array.sort()[0] === hacker1 ?
            'El Nombre del driver va primero.':
            'XD, definitivamente el navegador va primero.'
)

//Bonus 1
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in erat venenatis, dignissim enim in, dignissim nulla. Curabitur in ante lacus. Quisque aliquam mi sed diam maximus fermentum. Ut ante nulla, varius eget arcu id, consectetur dictum metus. Integer at orci neque. Sed dignissim dapibus eleifend. Suspendisse ac justo a erat consectetur finibus ac ac eros. Sed congue turpis id ex eleifend ornare. Sed a sollicitudin nunc.\r\n\r\n' +
              'Nunc velit sem, porttitor in iaculis vitae, sodales ut augue. Aliquam felis dui, ullamcorper id pretium a, accumsan eget lacus. Nulla bibendum commodo libero, nec pretium elit molestie porttitor. Vestibulum volutpat sapien non erat lacinia, sit amet posuere eros placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus, eros nec suscipit ultricies, justo tortor bibendum ipsum, et tempus neque tortor lobortis urna. Duis consequat augue nisi, in facilisis orci efficitur at. Curabitur et elementum est. Sed sed tellus feugiat, cursus lacus a, tempor sapien. Donec feugiat felis libero, eu ultricies nisl tincidunt sit amet.\r\n\r\n' +
              'Praesent sodales mauris at iaculis volutpat. Donec ut tincidunt elit. Donec nec condimentum justo, vitae porttitor justo. Ut volutpat massa eu diam egestas semper. Donec feugiat ante eu sodales placerat. Sed diam purus, tincidunt nec erat eget, interdum dictum ante. Aenean ornare, diam ut tincidunt varius, tellus justo ornare magna, in ornare magna quam nec mauris. Nunc risus mauris, aliquam non tempor aliquam, molestie id nulla. Aenean faucibus, ligula vehicula vulputate imperdiet, purus enim pharetra ipsum, vitae pretium nulla orci non ante. Proin fermentum odio risus, non malesuada lacus malesuada eu. Sed at magna a ante tincidunt condimentum placerat sed elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec condimentum ex.'
console.log( lorem.replaceAll('\r\n\r\n',' ').split(' ').length)

console.log(lorem.replaceAll('\r\n\r\n',' ').split(' ').filter((item) => item === 'et').length)

//Bonus 2
const palindromo = (palabra) => {
    let palabraCustom = palabra.replaceAll(' ','').toLowerCase();
    console.log(palabraCustom)
    let acumulador = '';
    for(let it = palabraCustom.length; it>=0; it--){
        acumulador += palabraCustom.charAt(it);
    }  
    console.log(acumulador)
    return palabraCustom === acumulador ? true : false;
}

console.log(palindromo('Was it a car or a cat I saw'))