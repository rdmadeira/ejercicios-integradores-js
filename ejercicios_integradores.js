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
const numero1 = prompt('Ingrese el primer numero de la suma', 'Solamente numeros');
const numero2 = prompt('Ingrese el segun numero de la suma', 'Solamente numeros');
const suma = +(numero1) + +(numero2);
alert(`La suma de los numeros ingresados es: ${+numero1 + +numero2}`)