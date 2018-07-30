/*
  Check if a word is a palindrome
*/

function palindrome(words) {
  words2 = words.replace(/\s/g,'').toLowerCase();
  var reverseWords = words2.split('')
    .reverse()
    .join('');
  if (words2 === reverseWords) {
    console.log('"' + words + '" is a palindrome');
  }
  else {
    console.log('"' + words + '" is not a palindrome');
  }
}

palindrome('racecar');
palindrome('kiss kiss bang bang');
palindrome('racecaR Racecar');
