'use strict';

let names = prompt('Whats your name?');
alert ('Welcome to my websit '+ names +' I hope you like it');

alert('I am going to ask you 5 question, to know me more , and your answer should be yes or no ');

let q1 = prompt('DO I  like Anime ?').toLowerCase();

switch(q1){
case 'yes':
  alert('NO, I dont like Anime');
  console.log('yes');
  break;
case 'no':
  alert('Thats right, I dont like anime' );
  break;
default :
  alert('You dont answer my question but I dont like Anime.');
  break;

}

let q2 = prompt('DO I  like Spaghetti ?').toLowerCase();
switch(q2){
case 'yes':
  alert('yes, I like Spaghetti its the best meal');
  console.log('yes');
  break;
case 'no':
  alert('sorry  thats wrong,I like it' );
  break;
default :
  alert('You dont answer my question but I  like Spaghetti.');
  break;

}

let q3 = prompt('DO I  like Puzzle ?').toLowerCase();
switch(q3){
case 'yes':
  alert('yes, I like Puzzle');
  console.log('yes');
  break;
case 'no':
  alert('sorry  thats wrong,Ilike it' );
  break;
default :
  alert('You dont answer my question but I  like Puzzle.');
  break;

}

let q4 = prompt('DO I  like Codeing ?').toLowerCase();
switch(q4){
case 'yes':
  alert('yes, I like coding');
  console.log('yes');
  break;
case 'no':
  alert('sorry  thats wrong, Ilike it' );
  break;
default :
  alert('You dont answer my question but I  like Coding.');
  break;

}


let q5 = prompt('Did I  study software development ?').toLowerCase();
switch(q5){
case 'yes':
  alert('Unfortunatly NO');
  console.log('yes');
  break;
case 'no':
  alert('Thats right but now I am joining a scholarship to learn it' );
  break;
default :
  alert('You dont answer my question ');
  break;

}

alert (' Thanks '+ names +' for your time and I hope you Know me more  by this question.');


