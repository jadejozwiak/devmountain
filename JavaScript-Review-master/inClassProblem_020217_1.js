/*
Create a function that goes through the number 1 - 100
If the number is divisible by 3, console log “Fizz”
If it’s divisible by 5, console log “Buzz”
If it’s divisible by 3 and 5, console log “FizzBuzz”
Otherwise, just console log the number
*/

function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    else if(i % 3 === 0) {
      console.log("Fizz");
    }
    else if(i % 5 === 0) {
      console.log("Buzz");
    }
    else {
    console.log(i);
    }
  }
}

fizzBuzz();
