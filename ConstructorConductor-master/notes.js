function Animal(species, numLegs, name) {
  this.species = species;
  this.numlegs = numLegs;
  this.name = name;
}
// console returns:
// undefined


//In this function, we have three parameters. Inside of the function, we are assigning values to the object that is being created. Prototypical inheritiance is where any object being created from a specific constructor function will inherit all it's objects.

var dog = new Animal('dog', 4, 'Gizmo')

console.log(dog)

// console returns:
// Animal {species: "dog", numlegs: 4, name: "Gizmo"}

// When we use the 'new' keyword, it sets context to the 'this' keyword.
// If you do not use the new keyword, it will create these variables on the global scope.

Animal.prototype.saySomething = function() {
  console.log('I am a(n) ' + this.species + ' and my name is ' + this.name)
}

// console returns:
/*
function () {
  console.log('I am a(n) ' + this.species + ' and my name is ' + this.name)
}*/

console.log(dog.saySomething())
// console returns:
// I am a(n) dog and my name is Gizmo
