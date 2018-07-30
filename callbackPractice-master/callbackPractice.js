/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    console.log('this is the string', str)
    console.log('this is the callback', cb)
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });

    function logger () {
      console.log('logMe')
    }

    setInterval(logger, 1000) {

  }
*/




  //Code Here for first

function first(names, cb) {
  cb(names[0]);
}
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
function last(names, cb) {
  cb(names[names.length - 1])
}
last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
function multiply(x, y, cb) {
  var num = x * y;
  cb(num);
}
multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
/*function contains(names, x, cb) {
 var check = false;
 names.forEach(function(name){
   if(name === x) {
     check = true;
     return check;
   }
 })
 cb(check);
}
contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});*/

/*
function contains(needle, haystack){
    haystack.indexOf(needle) !== -1 ? true : false
}

contains('Colt', names) === true ? console.log('Colt is in the array') : console.log('Colt is not in the array')
*/
var contains = function(names, query, cb){
   cb((names.indexOf(query) !== -1 ? true : false));
}

contains(names, 'Colt', function(result){
 if(result === true){
   console.log('Colt is in the array');
 } else {
   console.log('Colt is not in the array');
 }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
function uniq(names, cb) {
  var newNames = names.filter(function(item, pos) {
    return names.indexOf(item) == pos;
  })
  cb(newNames);
}
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
function each(names, cb) {
  for (var i = 0; i <names.length; i++) {
    var indice = name[i];
    var item = name;
    cb(item, indice);
  }
}
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
// function getUserById (users, x, cb) {
//   var result = false;
//   for (var user in users) {
//     result = user.hasOwnProperty('id');
//     if (result = true && user.id === x) {
//       cb(user);
//       console.log("I found the piece of the object I need.")
//     }
//   }
// }

function getUserById(objArray, value, callback) {
  for(var i = 0; i < objArray.length; i++) {
    if(objArray[i].id === value) {
      callback(objArray[i]);
    }
  }
}



var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
