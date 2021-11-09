//ejercicio N°3: Crear una función que reciba dos parámetros. Un número y un string (texto). Luego debe repetir ese string tantas veces como lo diga el número recibido
​​
function ejercicioTres(numero, texto) {
    for (var i = 0; i < numero; i++) {
        console.log(texto);
    };
}
ejercicioTres(2, "hola");