var user = {
  id: 1,
  name: 'Gwen Stacy',
  email: 'gwen.stacy@email.com'
}

var userCopy = user

console.log(userCopy)
// console returns:
// Object {id: 1, name: "Gwen Stacy", email: "gwen.stacy@email.com"}


user.name = "Luke";

console.log(userCopy)
// console returns:
// Object {id: 1, name: "Luke", email: "gwen.stacy@email.com"}

// instead, create a new object

var userCopy = Object.create(user)
console.log(userCopy)
// console returns:
/* Object {}
  __proto__:Object
    email:"gwen.stacy@email.com"
    id:1
    name:"Gwen Stacy"
*/

userCopy.name = "Luke";
console.log(userCopy)
// console returns:
/* Object {name: "Luke"}
  name: "Luke"
  __proto__:Object
    email:"gwen.stacy@email.com"
    id:1
    name:"Gwen Stacy"
*/

for (var key in userCopy) {
  console.log(key, userCopy[key]);
}
// console returns:
/*
name Luke
id 1
email gwen.stacy@email.com
*/
