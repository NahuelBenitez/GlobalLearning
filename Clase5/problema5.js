//Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que lo identifique
let array = [1, 1, 1, 1, 3];

function buscar(array) {
    return array.find(item => array.indexOf(item) == array.lastIndexOf(item));
}
const valorUnico = buscar(array);
console.log("El unico valor es: %d", valorUnico);