//: Haga una función que reciba un número y retorne un arreglo que tenga el tamaño del número recibido.
//El contenido del arreglo deben ser números desde el 0 hasta el número recibido -1 (0 a n-1)

function array(numero) {
    const array = [];
    for (var i = 0; i < numero; i++) {
        array.push(i);
    }
    console.log(array);
}
array(3);