/*const contenedor = document.getElementById('contenedor');

const toppings = document.getElementsByClassName('toppings');

const misToppings = document.getElementsByTagName('li');

const Bacon = document.querySelector('#bacon');

const Bacons = document.querySelector('.topping');

const primerToppingMarron = document.querySelector('.topping.fondo-marron');
//const primerToppingMarron = document.querySelector('ul lu.fondo-marron');

const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');

const toppingsNaranja = document.querySelectorAll('topping.fondo-naranja');*/


// EDITANDO ESTILOS 

/*const primerTopping = document.querySelector('.topping');
//console.log(primerTopping);
//console.log(primerTopping.style);
primerTopping.style.backgroundColor = '#FFE4B5';
primerTopping.style.color = '#66CDAA';
primerTopping.style.textTransform = 'uppercase';*/


// ACCEDER AL TEXTO

/* 
console.log('innerText');
console.log(listaDeToppings.innerText);

console.log('textContent');
console.log(listaDeToppings.textContent);

console.log('innerHTML');
console.log(listaDeToppings.innerHTML);
*/ 


//MODIFICAR TEXTO 

/*
const titulo = document.getElementById('titulo');

titulo.innerText = 'Mis Toppings Favoritos';
*/

//const enlaces = document.getElementsByTagName('a');

//console.log(enlaces[0].getAttribute('href')); Obtener 
//console.log(enlaces[0].removeAttribute('href')); Eliminar
//console.log(enlaces[0].setAttribute('href, https://www.freecodecamp.org')); Actualizar


//AGREGAR O ELIMINAR CLASES
/*
const primerTopping = document.querySelector('.topping');
//Añadir
//primerTopping.classList.add('texto-verde');

//Verificar si la clase existe
console.log(primerTopping.classList.contains('fondo-azul'));

//Eliminar
primerTopping.classList.remove('topping');

console.log(primerTopping.classList);
*/

/*
//CREAR ELEMENTOS 
//referencia a un elemento HTML
const listaDeToppings = document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li');

toppingNuevo.classList.add('topping','fondo-marron');
toppingNuevo.innerText = 'Tomate';
//Añadir un elemento al final de la lista de toppings 
listaDeToppings.append(toppingNuevo);

toppingNuevo.remove();
*/

//RECORRER DOM

//const listaDeToppings = document.getElementById('lista-toppings');

//console.log(listaDeToppings.parentElement);
//console.log(listaDeToppings.parentNode);
//console.log(listaDeToppings.parentElement.parentElement);
//console.log(listaDeToppings.children);
//console.log(listaDeToppings.firstChild);
//console.log(listaDeToppings.children[0]);
//console.log(listaDeToppings.lastchild);
//console.log(listaDeToppings.firstElementChild);
//console.log(listaDeToppings.previousElementSibling);


//EVENTOS 

//const carnePicada = document.getElementById('carne-picada');

//function mostrarClic(e) {
//   console.log(e.target.innerText);
//}

//carnePicada.addEventListener('click', (mostrarClic));

//Lo mismo pero para todos los toppings

/*const toppings = document.getElementsByClassName('topping');

for (const topping of toppings) {
    //console.log(topping);
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}*/