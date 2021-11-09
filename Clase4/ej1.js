//ejercicio N°1 Crear una función que reciba un número como parámetro y devuelva “par” o “impar” dependiendo del número que tome ese parámetro
function parOimpar(numero) {
    if (numero % 2 == 0) {
        console.log("es par");
    } else {
        console.log("es impar");
    }
}​
parOimpar(5);