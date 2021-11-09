//mayor producto de numeros adyacentes

const miArray = [1, 5, 3, 7, 8, 15, 2];

miArray.sort(function(a, b) { return b - a });
console.log(miArray);

let primero = miArray.shift();
let segundo = miArray.shift();
let producto = primero * segundo;
console.log(producto);