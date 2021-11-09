/*
Teniendo en cuenta la misma conferencia anterior, necesitamos crear nombre de usuario a cada persona 
registrada dependiendo del nombre y el año en el que nacieron.
 Este nombre de usuario tiene que agregarse como una nueva propiedad llamada “userName
 */


const list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

let newArray = [];
var i = 0;
list1.forEach(function(item) {
    let name = item.firstName.toLowerCase();
    let last = item.lastName.charAt(0).toLowerCase();
    let year = 2021 - item.age;
    let user = name + last + year;
    item.userName = user;
    i++;
});
console.log(list1);