// map and filter


var arr1 = [1, 2, 3, 4, 5];

var arr2 = arr1.map(function(elem) {
  return elem;
})

/*
arr2
[1, 2, 3, 4, 5]
arr2.push(6)
6
arr1
[1, 2, 3, 4, 5]
arr2
[1, 2, 3, 4, 5, 6]
*/

var arr2 = arr1.map(function(elem) {
  return elem + 10;
})

/*
arr2
[11, 12, 13, 14, 15]
*/


var arr2 = arr1.filter(function(elem) {
  return elem === 1;
})

/*
arr2
[1]
*/

var arr2 = arr1.filter(function(elem) {
  return elem % 2 === 0;
})

/*
arr2
[2, 4]
*/
