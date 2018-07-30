function sayName() {
  console.log(this.firstName + ' ' + this.lastName);
}

// Because I am using the 'this' keyword, I know that the function needs to have an object of some kind.

var user1 = {
  firstName: 'Gwen',
  lastName: 'Stacy'
}



var user2 = {
  firstName: 'Mary',
  lastName: 'Jane'
}



sayName.call(user1)
var sayName2 = sayName.bind(user2) //this is creating a new function that can be used later

// If you change the function that the bind method is bound to. Bind is already bound, so it will not change. It's not just referencing the other function.


// ways to reference an array with call and apply. they invoke the function when you use them.

// bind is setting a function to be used later.
sayName.call(user1, param1, param2);
sayName.apply(user1, [param1, param2]);
