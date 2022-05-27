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

// INTEGRADOR FÁCIL:
// Se tendrá que aplicar todo lo aprendido con los // ejercicios anteriores:
// Deberá poder ingresar un día de la semana
// Deberá poder compararlo con todos los días de la semana
// Deberá evaluar si es un día de semana y fin de semana // mediante un mensaje similar a: "El día es hábil" sino // "El día es fin de semana";
// En caso de encontrar el día utilizar la sentencia break // y terminar el for.
const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
const diaElejido = prompt('Ingrese un día de la semana', 'dia de semana');
console.log(diasSemana[3]===diaElejido);
for(i=0; i<diasSemana.length; i++) {
    if(diaElejido === diasSemana[i] && i<5){
        console.log(diasSemana[i]);
        alert('El día es hábil.');
        break
    } else if(diaElejido === diasSemana[i] && i>=5) {
        console.log(diasSemana[i]);
        alert('El día es fin de semana');
        break
    } else {
        console.log(diasSemana[i]);
    }

}