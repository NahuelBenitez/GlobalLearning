/*necesitamos que nuestra función devuelva True si todos los lenguajes son iguales, 
o que nos devuelva False si hay por lo menos uno que sea distinto.
*/
const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

function equals(list) {

    const newList = list.map((item) => item.language);

    console.log(newList);
    if (newList.find(item => item != "Java")) {
        console.log("FALSE");
    } else {
        console.log("TRUE");
    }

}

equals(list);