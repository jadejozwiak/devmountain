//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
// 1) What is the purpose of the 'this keyword'?

//It's provides a shortcut way to refer back to an object.

// 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

// explicit (call, bind and apply)
// implicit
// new
// default

// 3) What is the difference between call and apply?

// In 'call' the subsequent arguments are passed in to the function as they are, while 'apply' expects the second argument to be an array that it unpacks as arguments for the called function.

// 4) What does .bind do?

// Bind is another way of defining context to the 'this' keyword.


//Next Problem

//Create an object called user which has the following properties.
//username --> which is a string
//email --> which is a string
//getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

//Code Here
var user = {
  username: "Gwen.Stacy",
  email: "gwen.stacy@email.com",
  getUsername: function() {
    return this.username;
  }
}


//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();
//Next Problem


// Write the function definitions which will make the following function invocations function properly.

//Function Invocations Here
function Car(x, y, z) {
  this.make = x;
  this.model = y;
  this.year = z;
  this.moveCar = function(amt) {
    if (this.hasOwnProperty('move') === false) {
      this.move = 0;
    }
    this.move += amt;
    return this.move;
  };
}
var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(10); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(10); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function() {
  console.log(this.year);
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this
console.log(userName);

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
//This will return the full myUser object.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

//'this' is bound to myUser object

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
