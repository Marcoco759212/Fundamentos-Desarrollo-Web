![logo_actosoft](https://actosoft.com.mx/assets/logo.df3233ae.png)

# Actosoft Laboratorio | JavaScript - Algoritmos Basicos

Bienvenidos al primer laboratorio de JavaScript!

La meta de este ejercicio es que se familiaricen con los tipos de datos primitivos en JavaScript, que acabamos de cubrir en clase. Siente de libre de curiosear e investigar cosas por tu cuenta, recuerda que google es tu mejor amigo.

Listos?

![qrjeCm](https://user-images.githubusercontent.com/76580/167263489-bd345c02-6c3b-425e-9a9c-96390dea9ba6.gif)

## Introduccion

Para esta actividad de **pair-programming** ambos integrantes del equipo tendran el mismo codigo en sus repos, pues se tiene que resolver en parejas.

Listos para darle?

## Configuracion inicial

- Forkea este repo
- Clona este repo
- Escribe el siguiente bloque en la carpeta _JS_ (en el panel de la izquierda)

  ```javascript
  console.log("Estoy listo!");
  ```

- Guarda el cambio del archivo
- Ejecuta la extencion de code runner y observa si aparece el mensaje
- Si puedes ver el msj estamos listos para comenzar.

- **Después de terminar la primera iteracion, o segunda, la que gustes, o tal vez hasta que termines el lab, sigue los pasos para entregar.**

## Entrega del Lab

Una vez que termines o lo hayas decidido, ejecuta los siguientes comandos:

```shell
$ git add .
$ git commit -m "terminado"
$ git push origin master
```

Crea un pull request para que podamos calificar el codigo de tu solucion.

## Instrucciones

### Iteracion 1: Creacion de variables e impresión

1.1 Crea una variable llamada `hacker1` esta contendra el nombre del que este compartiendo pantalla(driver). <br>
1.2 Imprime en consola `El Nombre del Driver es: Martin`.<br>
1.3 Create a variable `hacker2` que sera el nombre del navigator.<br>
1.4 Imprime en consola `The nombre del navegador es: Konhin`.

### Iteracion 2: Condicionales

2.1. Dependiendo de que nombre [sea más largo en carácteres](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), imprime en consola:
<br> - `El Driver tiene el nombre mas largo, con XX letras.` o <br> - `Parece ser que el navigator tiene el nombre mas largo, con XX letras.` o <br> - `Alá, ambos nombres tienen los mismos XX carácteres!`.

### Iteration 3: Loops o Bucles

3.1 Imprime todos los caracteres del nombre del Driver, separadas por espacios y [en mayúsculas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
Ejemplo: `M A R T I N`

3.2 Imprime todos los caracteres del navigator en reversa.
Ejemplo `nihnoK`

3.3 Dependiendo en el [orden lexico](https://en.wikipedia.org/wiki/Lexicographical_order) De los estring del Navigator y Driver, imprime: <br> - `El Nombre del driver va primero.` <br> - `XD, definitivamente el navegador va primero.` <br> - `What?! Ambos tienen el mismo nombre?`

### Bonus!

#### Bonus 1:

Ve al generador de texto [lorem ipsum](http://www.lipsum.com/) y:

- Genera 3 parrafos. Guarda el texto en una variable de tipo string.
- Haz que tu programa cuente el numero total de palabras.
- Haz que tu programa cuente cuantas veces aparece la palabra en latin [`et`](https://en.wiktionary.org/wiki/et#Latin).

#### Bonus 2:

Crea una variable llamada `fraseaRevisar` y tiene que contener un valor de tipo string. Escribe el codigo que nos permita revisar si el valor que asignamos a la variable es un [Palíndromo](https://en.wikipedia.org/wiki/Palindrome). Aqui tienen algunos ejemplos de palíndromos:

- "A man, a plan, a canal, Panama!"
- "Amor, Roma"
- "race car"
- "stack cats"
- "step on no pets"
- "taco cat"
- "put it up"
- "Was it a car or a cat I saw?" and "No 'x' in Nixon".

**Pista**: Si usas Google como ayuda para encontrar la solucion de esta iteracion, probablemente encuentres algunas soluciones que usan propiedades o metodos mas avanzados (como _join()_, _reverse()_, etc.). Sin embargo, trata de usar el conocimiento que actualmente tienes, puedes encontrar una bonita solución usando solo el `for` loop, `if-else` statements con algun `break` y `continue`...

## Recursos Extra

- [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

**Happy coding!** :heart:
