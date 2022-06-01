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
        if (item==='sabado') {
            item === new RegExp(/s[ãàáâäåAÃÀÁÂÄÅ]bado/, 'i')
        } else {
            item = new RegExp(item,'i');
        }
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
    if(pelis.find(item => item['id'] === id || item['titulo'] === titulo) === undefined) {
        pelis.push({'id': id, 'titulo': titulo});
        pelisOrdenTitulo();
        //pelisOrdenId()
        alert(`Peliculas disponibles - ${pelis.map(i => i.titulo).join(', ')}.`)
        return pelis
    } else {
        return alert('ID o Pelicula ya registrada!')
    }
}
document.getElementsByTagName('button')[0].addEventListener('click',agregarPeli);

// Crear una función que ordene las películas por Título y por ID
let pelisOrdenTitulo = () => {
    /* Podes usar 
    if(a.titulo>b.titulo) {
        return 1;
    };
    if(a.titulo<b.titulo) {
        return -1;
    }
    if(a.titulo===b.titulo) {
        return 0;
    } o abajo*/
    pelis.sort((a,b) => a.titulo.localeCompare(b.titulo, 'en-US','es-AR', {ignorePontuación:true}))
    console.log(pelis)
};
let pelisOrdenId = () => {
    /* Podes usar 
    pelis.sort((a,b) => {
        a=Number(a); b=Number(b)
        return a.id - b.id;
    }) o abajo: */
    pelis.sort((a,b) => a.id.localeCompare(b.id,'es-AR',{numeric: true}))
    console.log(pelis)
}

// Crear una función que elimine una película por su ID.
function delIDPelis () {
    let i = document.getElementsByName('delPeli')[0].value;
    if(i === 'null') { i = null;console.log(i)}
    pelis = pelis.filter((item)=> i !== item.id);
    alert(`Peliculas disponibles - ${pelis.map(i => i.titulo).join(', ')}.`);
    console.log(pelis)
    return pelis
}
document.getElementsByTagName('button')[1].addEventListener('click',delIDPelis);


// MEJORAR LA CALCULADORA SEPARANDO EN FUNCIONES CADA OPERACIÓN:
// Deberá poder ingresar 2 valores
// Deberá poder ingresar que operación quiere realizar
// Cada operación tendrá que ser una función con los 2 parámetros para // sumar, restar, multiplicar o dividir;
// Deberá mostrar el resultado de la operación en consola.
function submitDatos() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let op = document.querySelector('input[name="operacion"]:checked').value;
    let result = () => {
    if(op === 's') {
        result = Number(num1) + Number(num2);
        alert(`El resultado de la suma es: ${result}.`)
        return result;
    }
    if(op === 'r') {
        result = Number(num1) - Number(num2);
        alert(`El resultado de la resta es: ${result}.`)
        return result;
    }
    if(op === 'm') {
        result = Number(num1) * Number(num2);
        alert(`El resultado de la multiplicación es: ${result}.`)
        return result;
    }
    if(op === 'd') {
        result = Number(num1) / Number(num2);
        alert(`El resultado de la división es: ${result}.`)
        return result;
    }}
    console.log(result());
}
document.getElementsByTagName('form')[0].addEventListener('submit',submitDatos);

// HACER UN OBJETO QUE REPRESENTE UN AUTO:
// Deberá tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad máxima
function Auto(color, modelo, patente, marca, prendido, velocidad, maxvel) {
    this.color = color;
    this.model = modelo;
    this.patente = patente;
    this.marca = marca;
    this.prendido = prendido;
    this.velocidad = 0;
    this.maxvel = maxvel;
    this.encender = ()=> {return this.acelerar();}
    this.acelerar = ()=> {
        for(av=0; av<=this.maxvel; av+=10){
            this.velocidad = av;
            this.mostrarVeloc();
        }
        return this.maxvel;
    }
    this.mostrarVeloc = ()=> {alert(this.velocidad)};
    this.frenar = ()=> {
        for(av=this.velocidad;av>0;av-=10){
            this.velocidad = av;
            this.mostrarVeloc();
        }
        this.apagar();
    };
    this.apagar = ()=> {alert('Se ha apagado!')};
}


const fiesta = new Auto('beige','fiesta','IMM056', 'Ford','Injeccion Electronica', undefined, 180);
// Deberá tener los métodos encender, acelerar, mostrar velocidad actual, frenar y apagar
document.getElementById('encenderMotor').addEventListener('click',fiesta.encender);
document.getElementById('frenarMotor').addEventListener('click',fiesta.frenar);
// Por lo tanto mediante el método acelerar tendrá que ir aumentando la velocidad hasta llegar a la velocidad máxima.
/* 
// CREAR UNA FUNCIÓN QUE AGREGUE OBJETOS, PELÍCULAS:
function Films(id, titulo, descripción, año, duración, actores, director) {
    this.ID = id;
    this.titulo = titulo;
    this.descripción = descripción;
    this.año = año;
    this.duración = duración;
    this.actores = [];
    this.director = director;
    this.agregarAtor = (e)=> {this.actores.push(e)}
}
// El objeto película Deberá tener ID, titulo, descripción, año, duración, actores, director
const tropaDeElite = new Films(001,'Tropa de Elite', 'Nascimento (Wagner Moura), capitán del BOPE, la Tropa de Elite de Río de Janeiro, es asignado para comandar uno de los equipos que tienen como misión apaciguar la favela ubicada en el Morro do Turano con motivo de la visita del papa Juan Pablo II de aquel año. El capitán se enfrentará con sus miedos internos a la hora de cumplir con las órdenes de sus superiores al mismo tiempo que tratará de cumplir con su deseo y el de su mujer, Rosane (Maria Ribeiro) de salir de la línea del frente del Batallón y encontrar al sustituto ideal.', '2007', '1h55min', {}, 'José Padilha');
// Deberá tener métodos para editar todas sus propiedades, menos su ID, y para los actores tendrá que ir agregando uno a uno.
tropaDeElite.agregarAtor('Wagner Moura') //= ['Wagner Moura', 'Maria Ribeiro', 'André Ramiro', 'Caio Junqueira', 'Milhem Cortaz', 'Fernanda Machado', 'Fábio Lago'];
console.log(tropaDeElite.actores);
Object.defineProperty(tropaDeElite,'ID', {
    enumerable: false,
    configurable: false,
    writable: false,
});
tropaDeElite.ID = '5555';
delete tropaDeElite.ID;
console.log(tropaDeElite.ID); */


// CREAR UNA FUNCIÓN PARA CARGAR AUTOS EN UN CAMIÓN:

// El camión tiene un peso máximo de carga
function cargarAuto(pesoMax) {
    let camion = {'pesoMax': pesoMax, 'peso': 0, cars: []};
// El auto tendrá que tener al menos patente y peso
    function Car(patente, peso){
        this.patente = patente;
        this.peso = Number(peso);
    }
    let carsArr = [new Car('imm056', 980), new Car('icv013', 760), new Car('ich142',1080), new Car('dcx721', 890), new Car('dcx721', 890), new Car('fgh213', 1200), new Car('dcx755', 980), new Car('ctx257', 880), new Car('rtf810',1020), new Car('drw258', 1690), new Car('trf541', 690)]
    console.log(carsArr);

// El objeto camión deberá validar con cada auto ingresado si está por debajo del peso o si ya no lo puede agregar
    for(n = 0; n <= carsArr.length - 1; n++){
        camion.peso += carsArr[n].peso;
// Además de almacenar los autos debe tener la posibilidad de validar que no tenga patentes repetidas y que me devuelva todas las patentes que tiene a bordo.
        if(camion.peso <= camion.pesoMax && camion.cars.find( item => item.patente.toString() === carsArr[n].patente.toString()) === undefined ) {
            camion.cars.push(carsArr[n]);
        }
        else if(camion.peso > camion.pesoMax) {
           camion.peso -= carsArr[n].peso;
           alert(`Car patente ${carsArr[n].patente} no entra por ultrapasar el peso maximo de ${pesoMax}kg del camion.`)
        } else {
           camion.peso -= carsArr[n].peso;
           alert(`Car patente ${carsArr[n].patente} no entra por ya haber ingresado esta patente`)
        }
        console.log(camion.cars);
        console.log(camion)
    }
    let patentesArr = [];
    for(i=0; i <= camion.cars.length - 1; i++){
        patentesArr[i] = camion.cars[i].patente;
    }
    console.log('Los autos cargados son de las patentes ' + patentesArr.join(', ') + '.' );
    console.log(`Peso cargado: ${camion.peso} Kg.`);
    return patentesArr.join(', ');
    
}
cargarAuto(8500);


