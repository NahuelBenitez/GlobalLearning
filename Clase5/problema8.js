/*Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cual se esta por comer.
Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos
 al último elemento como el primero.
El lobo solo puede comer a la oveja que tiene a su derecha
 */


function warnTheSheep(array) {
    let indexLobo = array.indexOf("wolf");
    let sheepsRight = array.slice(indexLobo).length - 1;
    console.log(array);
    if (sheepsRight == 0) {
        console.log("No Sigas Comiendo Ovejas!");
    } else {
        console.log("Cuidado Oveja N°" + sheepsRight + " ,El Lobo esta cerca!");
    }
}
warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep"]);