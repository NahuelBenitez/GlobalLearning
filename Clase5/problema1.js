//haga una funcion que siempre elimine el primer elemento del array
const array = [0, 1, 2, 3, 4, 5, 6];

function deleteFirst(ar) {
    ar.shift();
}
console.log(array);
deleteFirst(array);
console.log(array);