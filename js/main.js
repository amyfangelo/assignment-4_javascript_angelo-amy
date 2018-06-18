


//functions

function howdy( person, message ) {
  return person + ' says ' + message;
}

var message = howdy('Amy Angelo', 'Hi' );

function howdy(){
  return('Amy Angelo says hi');
}

console.log(howdy());

//6b

 var numba = function(string) {
  if (string.length < 7 ) {
    return('What a short little word!');
  } else if (string.length > 7 ) {
    return('I am sorry, but that is too many to count');
  } else if (string.length === 7) {
    return('7, what a perfect choice!');
  }
}

console.log(numba('seven'));
console.log(numba ('university'));
console.log(numba('7'));


function inception( display, favMovie ) {
  display(favMovie);
}

function movieLog(movie) {
    console.log (movie + ' '+ 'is a fantastic movie.');
}

inception(movieLog, 'Shrek');
