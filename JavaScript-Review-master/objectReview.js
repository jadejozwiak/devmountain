//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: 'A Perfect Circle',
  food: 'steak',
  person: 'Mikey',
  book: 'House of Leaves',
  movie: 'Rogue One',
  holiday: 'October'
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'Fiat Abarth 500';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Gray';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

function truthyFalsy (obj) {
  for (var key in obj) {
    if (obj[key]) {
      console.log(obj[key] + ' = truthy');
    }
    else {
      console.log(obj[key] + ' = falsy')
      delete obj[key];
      delete obj.key;
    }
  }
  return obj;
}

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Justine';
user.username = 'justine';
user.pwHash = 'U+alksBkasdj';
//Now console.log your object and make sure it looks right.

console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection.

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console.

methodCollection = {
  alertHello: function() {
    alert('hello')
  },
  logHello: function() {
    console.log('hello')
  }
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

function voweler (str) {
  var obj = {};
  var a = str.match(/[a]/gi);
  var e = str.match(/[e]/gi);
  var i = str.match(/[i]/gi);
  var o = str.match(/[o]/gi);
  var u = str.match(/[u]/gi);
  var aCount = a === null ? 0 : a.length;
  var eCount = e === null ? 0 : e.length;
  var iCount = i === null ? 0 : i.length;
  var oCount = o === null ? 0 : o.length;
  var uCount = u === null ? 0 : u.length;
  if (aCount > 0) {
    obj.a = aCount;
  }
  if (eCount > 0) {
    obj.e = eCount;
  }
  if (iCount > 0) {
    obj.i = iCount;
  }
  if (oCount > 0) {
    obj.o = oCount;
  }
  if (uCount > 0) {
    obj.u = uCount;
  }
  return obj;
}

function voweler (str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsObj = {};
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      if (!vowelsObj[str[i]]) {
        vowelsObj[str[i]] = 1;
      } else {
        vowelsObj[str[i]]++;
      }
    }
  }
  return vowelsObj;
}
