function Animal(species, numLegs, name) {
  this.species = species;
  this.numlegs = numLegs;
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animal('dog', 4);

var river = new Dog('river');

console.log(river)

/*
console returns:

Dog {name: "river"}
  name:"river"
  __proto__:Animal
    name:undefined
    numlegs:4
    species:"dog"
*/
