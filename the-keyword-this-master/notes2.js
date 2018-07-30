var arr1 = [1, 2,3, 4, 5];
var arr2 = arr1;

arr2.push(6);

//console returns:
//arr1
//[1, 2, 3, 4, 5, 6]

//how to copy an array

var arr2 = arr1.slice();

//Use slice with no parameters inside of it, so it grabs the whole array. 
