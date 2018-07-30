String.prototype.reverse = function() {
  return this.split('').reverse().join('')
}
// console returns:
/*
function() {
  return this.split('').reverse().join('')
}*/

'racecar'.reverse()
// console returns:
// "racecar"

'hawaii'.reverse()
// console returns:
// "iiawah"
