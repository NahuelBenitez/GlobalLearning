//Teniendo un arreglo numérico, tenemos que sumarle un número (por parámetro) a cada elemento de nuestro arreglo
const array = [1, 2, 3, 4, 5];

function suma(numero) {
    let array = [1, 2, 3, 4, 5];
    array.forEach(function(item, index) {
        array[index] = item + numero;
    })
    console.log(array);
}

suma(10);