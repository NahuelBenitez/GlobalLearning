//haga una funcion que solo reciba arreglos con mas de 5 elementos y luego elimine los ultimos 3
const array = [0, 1, 2, 3, 4, 5];
//console.log(array.length);

function eliminarUltimos(vector) {

    if (vector.length > 5) {
        vector.length = vector.length - 3;
        console.log(vector);

    } else {

        console.log("por favor defina un vector mayor a 5 elementos");
    }

}
eliminarUltimos(array);