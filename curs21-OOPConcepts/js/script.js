// define the parent / superclass
function Animal(options) {
  // this is used to avoid errors when calling
  // new Animal with no parameter
  // e.g., var animalObj = new Animal();
  options = options || {};
  this.name = options.name;
  this.color = options.color;
  this.weight = options.weight;
  this.legs = options.legs;
}

Animal.prototype.eat = function() {
  console.log("nom nom, animal is eating");
};

Animal.prototype.speak = function() {
  console.log("hello, animal is speaking");
};

var animalObj = new Animal({
  name: "A generic animal",
  color: "purple"
});
console.log("animal object", animalObj);

// Define the child class / subclass
function Dog(options) {
  // the next line is used to inherit all properties
  // from parent class
  Animal.call(this, { legs: 4 });

  // we can add any properties to a dog
  this.breed = options.breed;

  // composition relationship: has-a
  this.owner = new Owner({
    name: options.ownerName,
    age: options.ownerAge
  });
}

// console.log("nero can't speak yet", nero.speak());

// the next line is used to inherit all methods
// from parent class
Dog.prototype = Object.create(Animal.prototype);

var nero = new Dog({ name: "Nero" });
nero.name = "Nero";
nero.color = "white";
console.log("nero", nero);

console.log("nero can speak now");
nero.speak();

// method overriding (suprascriere)
Dog.prototype.speak = function() {
  console.log("Ham Ham!");
};
nero.speak();
nero.eat();
animalObj.speak();

// define Owner class for composition example
function Owner(options) {
  options = options || {};
  this.name = options.name;
  this.age = options.age;
}

var rex = new Dog({
  ownerName: "Mela",
  ownerAge: 29
});
console.log("rex", rex);
console.log("rex's owner name", rex.owner.name);

// polymorphism
function Cat(options) {
  Animal.call(this, { legs: 4 });
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.speak = function() {
  console.log("Miau miau!");
};

var tommy = new Cat();
tommy.name = "Tommy";

console.log("----------------------");
var animalsArray = [tommy, rex, animalObj, nero];
for (var i = 0; i < animalsArray.length; i++) {
  var animal = animalsArray[i];
  animal.speak();
}

console.log(" STATIC PROPERTIES AND METHODS");

console.log("Dog.breed", Dog.breed);
var puffy = new Dog({ name: "Puffy", breed: "bichon" });
console.log("puffy.breed", puffy.breed);

// a static property is called on the class / constructor
// function itself, NOT on the instances / objects
Dog.HAS_PAWS = true;
console.log(Dog.HAS_PAWS); // true
console.log(puffy.HAS_PAWS); // undefined

Dog.SIT = function() {
  console.log("Sitting down from a static method");
};
Dog.SIT(); // Sitting down from a static method
// puffy.SIT(); // puffy.SIT is not a function

console.log("Objects creation methods");
var a = { x: 2 };
var b = { x: 2 };
console.log("a === b", a === b); // false
// a and b are two different objects (not primitives)
// that happen to have the same value
var n = 2,
  m = 2;
console.log("n === m", n === m); // true, because numbers are primitives

var c = a;
console.log("a ==== c", a === c, a, c); // true

a.x = 7;
console.log("a, b, c", a, b, c);

var kitty = Object.create(Cat.prototype);
kitty.name = "kitty";
console.log("kitty", kitty);
