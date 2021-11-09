/*
CLASE 7
Teniendo en cuenta la misma conferencia anterior,
 necesitamos saber el nombre y país de el primer desarrollador de cierto lenguaje que se haya inscripto. */
const list1 = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];

function paisLenguaje(language) {
    const value = list1.find(function(item, i) {
        return list1[i].language == language
    });
    if (value) {
        console.log(`${value.firstName} es el primer desarrollador ${value.language} en la Conferencia`);
    } else {
        console.log(`No hay desarrolladores ${language} en la conferencia`);
    }
}
paisLenguaje("Python");
//paisLenguaje("Ruby on Rails")