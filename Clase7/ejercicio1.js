/* : Pensemos que tenemos que hacer un juego. Y lo primero que necesitamos es que se puedan crear héroes en el juego.
Haga una función o una clase que nos sirva para crear nuestro objeto “heroe”
Debe tener las siguientes propiedades y valores.
*/


class Heroe {
    name
    position
    life
    damage
    experience
    constructor(nameHeroe, positionHeroe = '00', lifeHeroe = 100, damageHeroe = 5, experienceHeroe = 0) {
        this.name = nameHeroe;
        this.position = positionHeroe;
        this.life = lifeHeroe;
        this.damage = damageHeroe;
        this.experience = experienceHeroe;
        //  if (this.name == null) {
        //    nameHeroe = 'heroe';
        //}
    }
}
const person = new Heroe();
if (person.name == null) {
    person.name = 'heroe';
}
console.log(person);