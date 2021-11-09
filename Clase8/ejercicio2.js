//Teniendo en cuenta la misma conferencia anterior, necesitamos saber quienes son los desarrolladores con mayor edad.
const list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

/* 
Si el resultado es negativo, a se ordena antes que b.
Si el resultado es positivo, b se ordena antes de a.
Si el resultado es 0, nada cambia.
*/


list1.sort((a, b) => {
    if (a.age < b.age) {
        return 1;
    }
    if (a.age > b.age) {
        return -1;
    }
    return 0;
});
list1.forEach(element => {
    let name = element.firstName;
    let age = element.age;
    console.log("Los desarrolladores de mayor edad son :" + name + " con " + age + " años");

});