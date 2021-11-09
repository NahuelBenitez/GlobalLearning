/*Teniendo en cuenta la misma conferencia anterior, necesitamos saber si van a haber programadores de cierto lenguaje para poder
 preparar contenido específico.
 Por lo tanto, necesitamos una function que nos devuelva “true” o “false” 
 cuando le preguntemos por cierto lenguaje */


function dev(dlanguaje) {
    const list = [
        { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
        { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
        { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
    ];

    let flag = false;
    list.forEach(function(item) {
        if (item.language == dlanguaje) {
            flag = true;
        }
    })
    return console.log(flag)
}

//dev("Ruby");
dev("Javascript");
//dev("C#");


/*OTRA OPCION
function Validar(arr, lan){
    let valu= array.some(function(item){
        return item.languaje == lan;
    });
    return value;
}
*/