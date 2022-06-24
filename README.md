# Fundamentos-Desarrollo-Web
Repositorio para el curso de Fundamentos de Desarrollo Web (2022) por parte de Actosoft.


## Introducción a las Funciones

Ahora que tenemos un conjunto de variables, necesitamos funciones para calcularlas, cambiarlas, hacer algo con ellas. Hay tres formas en que podemos construir una función.

```javascript
    function miFuncion() {}
    const otraFuncion = function () {}
    const yOtra = () => {}
```

Usaremos la tercera forma en esta lección y hablaremos sobre las otras formas en próximas lecciones.

### Anatomía de una Función

```javascript
const yOtra = () => {}
```

Una función de flecha (arrow function) comenzará con la palabra clave `const`, seguido del `nombre de que vamos a asignarle a la función`, los paréntesis `()`, la flecha formada por el 'igual' y 'mayor que' `=>`, y finalmente, abra y cierre los corchetes `{}`. Entre estos corchetes es donde irá todo nuestro código a ejecutar.

```javascript
const saludo = () => {
    console.log('Hola!')
}

saludo()
```

En este ejemplo declaramos una función `saludo` y la configuramos en `console.log`, `'Hola'`. Entonces podemos ver que para ejecutar esta función, necesitamos escribir el nombre y los paréntesis. Esta es la sintaxis para ejecutar una función. Una función siempre necesita paréntesis para ejecutarse.

### Argumentos

Ahora que podemos ejecutar una función básica, vamos a comenzar a pasarle argumentos.

```javascript
const saludoConNombre (nombre) {
    console.log('Hola, ' + nombre)
}

saludoConNombre('Martin')
```

Podemos utilizar template strings para escribir la respuesta y concatenar los argumentos.

```javascript
const saludoConNombre (nombre) {
    console.log(`Hola ${nombre})
}

saludoConNombre('Martin')
```
Si agregamos una variable a los paréntesis cuando declaramos la función, podemos usar esta variable dentro de nuestra función. Iniciamos el valor de esta variable pasándola a la función cuando la llamamos. Entonces en este caso `nombre = 'Martin'`. También podemos pasar otras variables a esto:

```javascript
const miNombre = 'Juán'
saludoConNombre(miNombre) // Hola Juán
```

Podemos agregar múltiples argumentos colocando una coma entre ellos:

```javascript
const sumarDosNumeros = (a, b) => {
  const suma = a + b
  return suma
}

sumarDosNumeros(1, 5) // 6
```
### Declaración "return" y Scope

En el ejemplo anterior presentamos la declaración `return`. No vamos a usar `console.log` con todo lo que salga de una función. Lo más probable es que queramos devolver algo. En este caso es la suma de los dos números. Piense en la declaración de retorno ("return") como la única forma en que los datos escapan de una función. No se puede acceder a nada más que a lo que se devuelve fuera de la función. También tenga en cuenta que cuando una función golpea una declaración de retorno, la función detiene inmediatamente lo que está haciendo y "devuelve" lo especificado.

```javascript
const dividirDosNumeros = (a, b) => {
  const producto = a / b
  return producto
}

console.log(dividirDosNumeros(6, 3)) // 2
```

## Control de flujo y operadores de comparación

En este ejemplo, vamos a utilizar operadores de control de flujo y comparación. El flujo de control ("control flow") es una forma de que nuestra función verifique si algo es `true`, y ya sea ejecutando el código suministrado si es así o avanzando si no lo es. Para esto usaremos la palabra clave `if`:

```javascript
const edadDeChecoPerez (edad) {
    if (edad > 24) {
        return true
    } else {
      return false 
  }
}

edadDeChecoPerez(32) // true
```

Aquí estamos tomando un número (`edad`) y verificando si la declaración es` true` (`32 > 24`), lo es, por lo que devolveremos` true`, y la función se detendrá. Si no es así, omitirá ese código y la función devolverá `false`.

El símbolo "mayor que" (`>`) que ve en el último ejemplo se llama _Operador de comparación_. Los operadores de comparación evalúan dos elementos y devuelven `verdadero` o` falso`. Estos operadores son: `<`, `<=`, `>`, `> =`, `===`, `! ==`. Aprenderemos más sobre estos operadores en la próxima lección.

## Operadores de comparación (continuación)

En la última lección usamos operadores de comparación, ahora profundizaremos un poco más sobre cómo funcionan y luego presentaremos un pariente cercano de operadores de comparación, los "operadores lógicos".

En la última lección presentamos nuestros operadores de comparación, (`>` `>=` `<` `<=` `===` `!==`). Estos operadores funcionan como lo harían en una clase de matemáticas, mayor que, menor que, etc. Utilizamos estos operadores para evaluar dos expresiones. A medida que la computadora ejecuta el código, el operador devolverá un `verdadero` (si la declaración es verdadera) o un` falso`.

```javascript
1 > 2     // false
2 < 3     // true
10 >= 10  // true
100 <= 1  // false
```

El "triple igual" (`===`) no debe confundirse con un solo signo igual (que indica asignar un valor a una variable). El triple igual comparará todo sobre los dos elementos, incluido el tipo, y devolverá si son exactamente iguales o no:

(Algo a tener en cuenta: hay un "doble igual" (`==`) que comparará dos elementos, pero NO tendrá en cuenta sus tipos (`1 == '1' // verdadero`). Debido a esto , se considera una mala práctica usar el doble igual. Nos gustaría verte siempre usando el triple, y siempre nos verás usándolo.)

```javascript
1 === 1          // true
1 === '1'        // false
'perro' === 'perro'  // true
'perro' === 'Perro'  // false
```

El último operador de comparación que nos gustaría presentarle tiene dos partes.

Primero es el "NOT" (`!`). Cuando veas esto significará que estamos preguntando lo contrario de la expresión (volveremos a visitar el operador NOT más adelante en esta lección).

Con eso en mente, podemos introducir el "no es igual" (`!==`). Esto devolverá verdadero si los artículos NO son iguales entre sí de alguna manera. Esto, como el triple igual, tiene en cuenta el tipo de dato.

```javascript
1 !== 1          // false
1 !== '1'        // true
'perro' !== 'perro'  // false
'perro' !== 'Perro'  // true
```

## Flujos de control (continuación)

En la última lección aprendimos sobre el operador `if`. Podemos usar `if` para verificar y ver si una expresión es` true`, si es así, ejecute algún código, o si no es así, que omita el código y siga ejecutando el programa.

```javascript
if (1 + 1 === 2) {
    console.log('La expresión es verdadera')
}
```

Para complementar a `if`, también podemos usar las declaraciones` else if` y `else`. Estas declaraciones deben usarse con `if` y deben venir después de él. Estas declaraciones serán evaluadas si el inicial `if` devuelve `false`. Podemos pensar en el `else if` como otra declaración` if` que se ha encadenado (podemos tener tantas otras declaraciones `if` que queramos). Solo se ejecutará un bloque de código de instrucción `if` o `else if`. Si en algún momento una declaración devuelve `true`, ese código se ejecutará y el resto se omitirá:

```javascript
if (false) {
    console.log('Este código será omitido')
} else if (true) {
    console.log('Este código correrá')
} else if (true) {
    console.log('Este código NO correrá')
}
```
La declaración `else` siempre aparecerá al final de una cadena `else if` o `if`, y actuará de manera predeterminada. Si ninguna de las expresiones devuelve `true`, el bloque de código `else` se ejecutará sin importar qué. Si alguna de las expresiones anteriores `if` o `else if` son `true`, el bloque de código de instrucción` else` no se ejecutará.

```javascript
if (false) {
    console.log('Este código será omitido')
} else if (false) {
    console.log('Este código NO correrá')
} else {
    console.log('Este código correrá')
}
```

## Operadores lógicos

También podemos combinar dos expresiones de igualdad y preguntar si alguna de las dos es verdadera, si ambas son verdaderas o si ninguna de ellas es verdadera. Para hacer esto, utilizaremos operadores lógicos.

### &&

El primer operador lógico que veremos es el operador "Y" ("AND"). Está escrito con dos símbolos (`&&`). Esto evaluará ambas expresiones y devolverá verdadero si AMBAS expresiones son `true`. Si uno (o ambos) de ellos es falso, este operador devolverá `false`:

```javascript
if (100 > 10 && 10 === 10) {
    console.log('Ambas declaraciones son ciertas, este código se ejecutará')
}

if (10 === 9 && 10 > 9) {
    console.log('Una de las declaraciones es false, por lo que && devolverá false, y este código no se ejecutará')
}
```

### ||

El siguiente es el operador "Ó" ("OR"). Está escrito con dos barras verticales (`||`). Determinará si una de las expresiones es `true`. Devolverá `true` si una (o ambas) de las expresiones es` true`. Devolverá `false` si AMBAS expresiones son` false`:

```javascript
if (100 > 10 || 10 === 10) {
    console.log('Ambas declaraciones son ciertas, este código se ejecutará')
}

if (10 === 9 || 10 > 9) {
    console.log('Una de las declaraciones es true, por lo que || devolverá true y este código se ejecutará')
}

if (10 === 9 || 1 > 9) {
    console.log('Una de las declaraciones es falsa, por lo que || devolverá false y este código no se ejecutará')
}
```

### !

El último operador lógico es el operador "NOT" ("NO"). Está escrito como un solo signo de exclamación (`!`). Vimos este operador antes al determinar la igualdad (`!==`). Como antes, el operador NOT devolverá el valor booleano opuesto de lo que se le pasa:

```javascript
if (!false) {
    console.log('El ! devolverá true, porque es lo contrario de false, así que éste código se ejecutará')
}

if (!(1 === 1)) {
    console.log('1 es igual a 1, de modo que la expresión devuelve true. El operador ! devolverá lo contrario de eso, por lo que este código se ejecutará')
}
```

### Notas sobre operadores lógicos

Un par de cosas a tener en cuenta sobre los operadores lógicos.

* Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. En una declaración `&&`, si la primera expresión es `false`, la segunda expresión no se evaluará porque AMBAS expresiones deben ser` true`. Lo mismo para la declaración `||`. Si la primera expresión es `verdadero`, la segunda no se evaluará porque solo debe haber una declaración` verdadero` para cumplir con los requisitos del operador.

* Usa paréntesis. Como vimos en el segundo ejemplo de operador `!`, usamos paréntesis para evaluar PRIMERO lo que estaba dentro de los paréntesis, luego aplicamos el operador `!`. Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes de evaluar la expresión como un todo.

