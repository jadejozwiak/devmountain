/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw) {
    this.name = name;
    this.email = email;
    this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order
var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS')
var user2 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags')
var user3 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup')

users.push(user1, user2, user3)



//Console.log all of Tylers information
function getUserByName(objArray, value, callback) {
  for(var i = 0; i < objArray.length; i++) {
    if(objArray[i].name === value) {
      callback(objArray[i]);
    }
  }
}

/*users.forEach(function(user, index) {
  console.log(user, index);
})*/


getUserByName(users, 'Tyler', function(user){
  console.log('Tyler\'s information is ' + '\n email: ' + user.email + '\n password: ' + user.pw);
});

getUserByName(users, 'Lenny', function(user){
  console.log('Lenny\'s information is ' + '\n email: ' + user.email + '\n password: ' + user.pw);
});

//Now console.log all of Lennys information


//Now create another instance of User using your own information and then add that to your users array.

var user4 = new User('Justine', 'justine@email.com', 'plzkthx')
users.push(user4)

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.

users.forEach(function(user, index) {
  console.log(user.name);
})
