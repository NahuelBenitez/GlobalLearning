//Dado un arreglo de numeros enteros, encuentre la menor suma posible entre ellos
const miArray = [1, 5, 3, 7, 8];

miArray.sort(function(a, b) { return a - b });
console.log(miArray);
let primero = miArray.shift();
let segundo = miArray.shift();
let suma = primero + segundo;


console.log(suma);