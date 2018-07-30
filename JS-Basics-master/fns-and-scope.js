//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
    name = prompt("What's your name?", name);
    if (name === "Tyler") {
        text = "Great, your name is Tyler.";
        document.getElementById("problem1").innerHTML = text;
        return true;
    } else {
        text = "Your name is not Tyler!";
        document.getElementById("problem1").innerHTML = text;
        return false;
    }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
var yourName;
function getName() {
    yourName = prompt("What's your name?", " ");
    return yourName;
}


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
    getName();
    window.alert("Welcome, " + yourName);
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

function problem4() {
  var answer4 = "Parameters define a function. Arguments are used for invoking a function.";
  document.getElementById("problem4").innerHTML = answer4;
}


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


function problem5() {
  var answer5_1 = "A falsy value is a value that translates to false when evaluated in a Boolean context. The following will return a value of false when ran to as a falsy boolean: false, null, undefined, 0, NaN, '', and \"\". All other values are truthy, including \"0\" (zero in quotes), \"false\" (false in quotes), empty functions, empty arrays, and empty objects.";
  var answer5_2 = "To check for a truthy or falsy, you will need to run a boolean check. When javascript is expecting a boolean and it’s given something else, it decides whether the something else is \“truthy\” or \“falsy\”."
  document.getElementById("problem5_1").innerHTML = answer5_1;
  document.getElementById("problem5_2").innerHTML = answer5_2;
}



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(x) {
  x = "Justine";
  return x;
}



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

window.alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(n) {
  n = 'Justine';
  return n;
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

eval(innerFn);
//Now invoke innerFn.
