'use strict';

let names = prompt('Whats your name?');
alert ('Welcome to my websit '+ names +' I hope you like it');

alert('I am going to ask you 5 question, to know me more , and your answer should be yes or no ');


let counter = 0;

function anime() {
  let animeq = prompt('DO I  like Anime ?').toLowerCase();

  switch(animeq){
  case 'yes':
  case 'y':
    alert('NO, I dont like Anime');
    //console.log('yes');
    break;
  case 'no':
  case 'n':

    alert('Thats right, I dont like anime' );
    counter ++;
    break;
  default :
    alert('You dont answer my question but I dont like Anime.');
    break;

  }


}
anime ();
// eslint-disable-next-line no-unused-vars
function food () {
  let q2 = prompt('DO I  like Spaghetti ?').toLowerCase();
  switch(q2){
  case 'yes':
  case 'y':

    alert('yes, I like Spaghetti its the best meal');
    counter++ ;
    //console.log('yes');
    break;
  case 'no':
  case 'n':

    alert('sorry  thats wrong,I like it' );
    break;
  default :
    alert('You dont answer my question but I  like Spaghetti.');
    break;

  }

}
food () ;
// eslint-disable-next-line no-unused-vars
function puzzle() {
  let q3 = prompt('DO I  like Puzzle ?').toLowerCase();
  switch(q3){
  case 'yes':
  case 'y':

    counter ++ ;
    alert('yes, I like Puzzle');
    //console.log('yes');
    break;
  case 'no':
  case 'n':

    alert('sorry  thats wrong,Ilike it' );
    break;
  default :
    alert('You dont answer my question but I  like Puzzle.');
    break;

  }

}
puzzle ();

// eslint-disable-next-line no-unused-vars
function likeCode () {
  let q4 = prompt('DO I  like Codeing ?').toLowerCase();
  switch(q4){
  case 'yes':
  case 'y':
    counter ++ ;
    alert('yes, I like coding');
    //console.log('yes');
    break;
  case 'no':
  case 'n':

    alert('sorry  thats wrong, Ilike it' );
    break;
  default :
    alert('You dont answer my question but I  like Coding.');
    break;

  }


}
likeCode () ;

// eslint-disable-next-line no-unused-vars
function study() {

  let q5 = prompt('Did I  study software development ?').toLowerCase();
  switch(q5){
  case 'yes':
  case 'y':

    alert('Unfortunatly NO');
    //console.log('yes');
    break;
  case 'no':
  case 'n':
    counter ++;
    alert('Thats right but now I am joining a scholarship to learn it' );
    break;
  default :
    alert('You dont answer my question ');
    break;

  }
}
study();

alert (' Thanks '+ names +' for your time and I hope you Know me more  by this question.');

alert ('now, I will put a number in my mind and you will try to guess it.');


// eslint-disable-next-line no-unused-vars
function guessmynumber () {

  let mynu = '3' ;

  let guessnu = 0;

  for (let i = 0 ; i<4|| guessnu === mynu ; i++){
    guessnu = prompt ('You have 4 chances to guess my number ?');

    if (mynu !== guessnu ){
      if (guessnu< mynu)
        alert ('try again , your num too low');
      else
        alert ('try again , your num too high');

    }


    else {
      alert ('thats right');
      counter++ ;
      break;
    }
  }


  alert (' My Num is 3');
}
guessmynumber ();

// eslint-disable-next-line no-unused-vars
function favcountry () {

  let multicountry = ['palestine', 'egypt', 'jordan' , 'morocco', 'italy', 'iraq','russia' ];
  let x = 0;
  while (x<6){
    let typecontry = prompt ('pleas guess my country, you have 6 attempt').toLowerCase();
    for( let i= 0 ; i <7 ; i ++){
      if ( multicountry[i]===typecontry ){
        alert (' GREAT Thats right');
        counter ++ ;
        x=x+6;
        break;
      }
    }

    x++;
  }
}
favcountry () ;

alert ('your grade is '+ counter + ' Thanks for your time ');

