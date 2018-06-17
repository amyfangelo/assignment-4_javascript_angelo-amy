//arrays & string

var iceCream;
iceCream = ["matcha", "chocolate", "vanilla"];

var iceCream = "lavendar" ;


//objects in array

var presidents1 = {
  firstName: 'Donald',
  lastName: 'Trump',
  termLength: 1,
  party: 'Republican',
  yearsOfPresidency: 1,
};

var presidents2 = {
  firstName: 'Barack',
  lastName: 'Obama',
  termLength: 2,
  party: 'Democrat',
  yearsOfPresidency: 8,
};

var presidents3 = {
  firstName: 'George W.',
  lastName: 'Bush',
  termLength: 2,
  party: 'Republican',
  yearsOfPresidency: 8,
};

var presidents4 = {
  firstName: 'Bill',
  lastName: 'Clinton',
  termLength: 2,
  party: 'Democratic',
  yearsOfPresidency: 8,
};

var presidents5 = {
  firstName: 'Ronald',
  lastName: 'Raegan',
  termLength: 2,
  party: 'Republican',
  yearsOfPresidency: 8,
};

var presidents = ['presidents1', 'presidents2', 'presidents3', 'presidents4', 'presidents5' ];
console.log(presidents3.firstName + presidents3.lastName);

//functions

function howdy( person, message ) {
  return person + ' says ' + message;
}

var message = howdy('Amy Angelo', 'Hi' );

//6b

 var numba = function (string) {
    if (string < 7 )
return('What a short little word!' );

else if  (string > 7 )
return ('I am sorry, but that is too many to count' )

 else if (string === 7)
return( '7, what a perfect choice!' );

}

function numba (string) {
  return (
  console.log ('7'),
  console.log ('seventy'),
  console.log ('university')
)

}

function inception( display, favMovie ) {
display(favMovie);
}

function movieLogger (movie) {
    console.log (movie + ' '+ 'is a fantastic movie.');
}
inception(movieLogger, 'Shrek');
