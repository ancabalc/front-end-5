function myFirstFunction() {
  console.log('My first JS function');
}

// Call function
myFirstFunction();

function myFirstFunctionReturn() {
  return "My first JS function return";
}

var message = myFirstFunctionReturn();
document.write(message);
document.writeln('<strong>' + message + '</strong>');

function displayStars() {
  var line = "";
  for (i = 0; i < 4; i++) {
    line += "*";
    console.log(line);
  }
}

displayStars();
displayStars();
// Functions with params
function displayStars1(nr) {
  var line = "";
  for (i = 0; i < nr; i++) {
    line += "*";
    console.log(line);
  }
}

displayStars1(4);
displayStars1(2);
displayStars1(9);

// Function with default value for param
function displayStars2(nr = 4, char = '*') {
  var line = "";
  for (var i = 0; i < nr; i++) {
    line += char;
    console.log(line);
  }
}

displayStars2();
displayStars2();
displayStars2(2);
displayStars2(4, '-');

var fname = "Ana";
var lname = "Pop";

function displayName(fname, lname) {
  console.log(fname + " " + lname); 
  fname = "Ion";
  console.log("Inside function fname", fname); // Ion
}

displayName(fname, lname);
console.log("Outside function fname", fname); // Ana


function displayNameObject(person) {
  console.log(person.fname + " " + person.lname); 
  person.fname = "Ion";
  console.log("Inside function fname", person.fname); // Ion
}
var person = {fname: "Ana", lname: "Pop"};
displayNameObject(person);
console.log("Outside function fname", person.fname); // Ion


// Statement function
function statementFunction() {
  console.log("Statement function");
}
statementFunction();

//Exp function
var expFunction = function() {
  console.log("Exp function");  
}
expFunction();

// IIFE self invoking function
(function() {
  console.log("IIFE self invoking function");
})();

// Function with function as parameter
function testFunction() {
  alert("Exec from another function");
}
function execOtherFunction(testFunction) {
  testFunction();  
}
execOtherFunction(testFunction);

// Variables scope
var a = 1;    // Global
b = 2;        // Global
window.c = 3; // Global

function displayVariables() {
  var d = 4;  // Local
  e = 5;      // Global
  console.log("Inside Variable d =", d);
  console.log("Inside Variable e =", e);
}
displayVariables();
//console.log("Outside Variable d =", d);
console.log("Outside Variable e =", e);

// Closure
var x = 1;  // Global
function firstF() {
  var y = 2; // Local firstF
  
  secondF();
  
  function secondF() {
    var z = 3; // Local secondF
    w = 4;
    console.log("second x =", x); // 1
    console.log("second y =", y); // 2
    console.log("second z =", z); // 3
  }
  
  console.log("first x =", x); // 1
  console.log("first y =", y); // 2
  // console.log("first z =", z); // undefined
}
firstF();
console.log("x =", x); // 1
//console.log("y =", y); // undefined
//console.log("z =", z); // undefined
console.log("w =", w); // 4







