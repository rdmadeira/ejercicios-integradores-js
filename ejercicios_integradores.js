// - NOMBRE Y OPERACIONES:
// Pasos:
// Pedir nombre mediante prompt y disparar un alert con algún texto más
/* const nombre = window.prompt('Ingrese su nombre.','Solo letras');
alert(`Hola ${nombre}!`); */

// Pedir un número y sumarlo a otro que esté en una variable
/* let numero = prompt('Ingrese un numero.');
let randNum = Math.round(Math.random() * 1000);
const suma = randNum + +numero;
alert(`La suma de ${randNum} y ${numero} es igual a ${suma}`) */

// Pedir un número y restarlo a otro que esté en una variable
/* numero = prompt('Ingrese un numero.');
randNum = Math.round(Math.random() * 1000);
const resta = randNum - +numero;
alert(`La resta de ${randNum} y ${numero} es igual a ${resta}`) */

// Pedir un numero, luego otro y ambos sumarlos
/* const numero1 = prompt('Ingrese el primer numero de la suma', 'Solamente numeros');
const numero2 = prompt('Ingrese el segun numero de la suma', 'Solamente numeros');
const suma = +(numero1) + +(numero2);
alert(`La suma de los numeros ingresados es: ${+numero1 + +numero2}`); */


// -SINTAXIS Y VARIABLES:
// Realizar una calculadora que pueda sumar, restar, dividir y multiplicar.
/* 
// Pasos:
// Deberá ingresar un valor mediante un prompt
const num1 = +prompt('Por favor ingrese el primer numero para operar.','Numero 1');
// Deberá ingresar otro valor mediante otro prompt
const num2 = +prompt('Por favor ingrese el segundo numero para operar.','Numero 2')
// Mostrar el resultado de cada operación mediante distintos alert
const resultados = [(num1+num2), (num1 - num2), (num1*num2), (num1/num2)];
alert(`La suma de los numeros ingresados es: ${resultados[0]}`);
alert(`La resta de los numeros ingresados es: ${resultados[1]}`);
alert(`La multiplicacion de los numeros ingresados es: ${resultados[2]}`);
alert(`La division de los numeros ingresados es: ${resultados[3]}`);
 */

 /* 
// - DÍAS DE LA SEMANA:
// Crear un array con todos los días de la semana
const diasSem = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
// Recorrerlos y mostrar cuando sea domingo o sábado un mensaje en consola.
diasSem.forEach( (item, index) => {
    //if(item.match(/s[aá]bado/i) ) {
    //    console.log(`Es ${item}`, index)
    //}
    //if(item.match(/domingo/i) ) { 
    //    console.log(`Es ${item}`, index)
    //}
    if(item.match(/domingo/i)||item.match(/s[áa]bado/i) ) {
        console.log(`Es ${item}. Indice:`, index);
    }
}); */

/* 
// INTEGRADOR FÁCIL:
// Se tendrá que aplicar todo lo aprendido con los // ejercicios anteriores:
const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
// Deberá poder ingresar un día de la semana
const diaElejido = prompt('Ingrese un día de la semana', 'dia de semana');
console.log(diasSemana[3]===diaElejido);
// Deberá poder compararlo con todos los días de la semana
for(i=0; i<diasSemana.length; i++) {
    // Deberá evaluar si es un día de semana y fin de semana // mediante un mensaje similar a: "El día es hábil" sino // "El día es fin de semana";
    if(diaElejido === diasSemana[i] && i<5){
        console.log(diasSemana[i]);
        alert('El día es hábil.');
        // En caso de encontrar el día utilizar la sentencia break // y terminar el for.
        break
    } else if(diaElejido === diasSemana[i] && i>=5) {
        console.log(diasSemana[i]);
        alert('El día es fin de semana');
        break
    } else {
        console.log(diasSemana[i]);
    }
}
 */

// PEQUEÑAS FUNCIONES:
// Crear una función que pida nombre y apellido y lo muestre en la consola.
/* const getName = ()=> {
    const name = prompt('What´s your first and last name?','username userlastaname');
    console.log(name)
}
getName(); */


// Crear una función que en base a un parámetro muestre los días hábiles o de fines de semana en consola.
/* const verifDiaSemana = (e) => {
    e = prompt('Ingrese un dia de la semana:', 'dia');
    const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    if(e.match(/s[aá]bado/i)){
        e='sabado'
    }
    diasSemana.forEach((item, index) => {
        item = new RegExp(item,'i');
        if(e.match(item) && index<5) {
            console.log(diasSemana.slice(0,5));
        } else if(e.match(item) && index>=5) {
            console.log(diasSemana.slice(5,7));
        }
    } )
}
window.addEventListener('click',verifDiaSemana); 
 */

// O también por Array.find(), teoricamente es más eficiente en este caso, porque al encontrar el primer valor truthy que resulta la función callback, retorna y sigue el recorrido:
/* const verifDiaSemana = () => {
    let e = prompt('Ingrese un dia de la semana:', 'dia');
    const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
    if(e.match(/s[aá]bado/i)) {
        e = 'sabado';
    }
    let checkday = diasSemana.find((item,index) => {
        item = new RegExp(item,'i');
        if(e.match(item)&&index<5){
            console.log(diasSemana.slice(0,5));
        } else if(e.match(item)&&index>=5){
            console.log(diasSemana.slice(5,7));
        }
    } )
}
window.addEventListener('click',verifDiaSemana); */ 

// CREAR UN ARRAY DE PELÍCULAS:
let pelis = [];
// Crear una función que agregue una película al array de // películas
// La película deberá tener un ID y un Título
const agregarPeli = () => {
    let id = prompt('ingrese un id de pelicula','');
    let titulo = prompt('ingrese un titulo de pelicula','');
    
    // Crear una función que evalúe antes de agregar que la película no fue ingresada previamente
    if(pelis.find(item => item[0] === id || item[1] === titulo) === undefined) {
        pelis[pelis.length] = [id, titulo];
        return pelis;
    } else {
        return alert('ID o Pelicula ya registrada!')
    }
}
window.addEventListener('click',agregarPeli);

// Crear una función que ordene las películas por Título y por // ID
// Crear una función que elimine una película por su ID.
