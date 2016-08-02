/*
=======================================================

** Week 2 - Project 2 **
*** Looping & Conditionals ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Loops and Iteration Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

or If...Else Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

or While Loop Documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while


BASIC TRACK: 1-15
ADVANCED TRACK: 16-20
=======================================================
*/


// 1. Output each item in the following Array to your console:
console.log('Question 1');
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for(i=0;i<4; i++){
  console.log(livingRoom[i]);
}

// 2. Using a loop, log numbers 22-33 in the console.
console.log('Question 2');
var i =21;
do{
  i++;
  console.log(i);
}
while (i>21 && i<33)

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log('Question 3');
var i = 70;
do{
  i = i+5;
  console.log(i);
}
while (i>70 && i<100);


// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
console.log('Question 4');
var i = 0;
do{
  i++;
  console.log('This is how a professional loops.');
}
while(i>0 && i<5);

// 5. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats."
//     The numbers should range from 10 to 110, in increments of 25.
console.log('Question 5');
var i = -15;
do{
  i = i+25
  console.log('At home, I have '+ i + ' cats.')
}
while(i>=10 && i<110);

// 6. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
console.log('Question 6');

var numArray = [2, 17, 9, 24, 8];

for (i= 0; i < numArray.length; i++) {
  var listItem = numArray[i];
  if (listItem % 2 === 0 && listItem >=10){
    console.log(listItem + ' Even and greater than 10')
  } else if (listItem % 2 === 0){
    console.log(listItem + ' Even');
  } else {
    console.log(listItem + ' Odd');
  }
}

for (i = 0; i < numArray.length; i++) {
  var item = numArray[i];
  console.log(item);
}

// 7. Using the following Array, create variable called numThrees with the value [13, 23, 33, 43, 53, 63, 73]
console.log('Question 7');
var numArray7 = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77]

for (i = 0; i < numArray7.length; i+=3){
  var numThrees = numArray7[i];
  console.log(numThrees);
}

// 8. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

console.log('Question 8');
var hashes = '';
hashes += '#';
hashes += '#';
hashes += '#';
hashes += '#';
hashes += '#';
console.log(hashes); // #####


for (i = 0; i < 7; i++) {
  var hash= '#';
  for (j = 0; j < i; j++){
    hash += '#';
  }
  console.log (hash);
}


// 9. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
console.log('Question 9');

for (i = 0; i<100; i++){
  if (i % 5 === 0 && i % 3 === 0){
    console.log('FizzBuzz');
  } else if (i % 3 === 0){
    console.log('Fizz');
  } else if (i % 5 === 0){
    console.log('Buzz');
  } else {console.log(i);
  }
}

// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.
console.log('Question 10');
var human = prompt('Enter your choice...Rock Paper or Scissors', 'Rock, Paper, Scissors');
console.log(human);

// 11. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//     For reference:
//     Math.random gives you a random number between 0 and 1, which is different each time you call it.
console.log('Question 11');

var computer = Math.random();

console.log(computer);

// 12. Let's start our conditional statement.
//     If the random computer number falls between 0 and .33, the computer is "rock"
//     If the random computer number falls between .34 and .66, the computer is "paper"
//     If the random computer number falls between .67 and 1, the computer is "scissors"
console.log('Question 12');

function conditional(computer){
  if (computer < .33) {
    return 'rock';
  } else if (computer >.34 && computer <.66){
     return 'paper';
  } else {
    return 'scissors';
  }
}
// console.log(conditional(computer));

// 13. Using both "human" and the computer choice, begin another conditional statement to compare them.
 console.log('Question 13');

var computerResult = conditional(computer);
// console.log(computerResult);
// console.log(human);

function compareResults(result1, result2){
  var answer;
  var tie = -1;
  var result1Wins = 0;
  var result2Wins = 1;

  result1 = result1.toLowerCase();
  result2 = result2.toLowerCase();

  if(result1  == result2){
    answer = tie;
  } else if (result1 =='scissors' && result2 == 'rock'){
    answer = result2Wins;
  } else if (result1 == 'rock' && result2 == 'paper'){
    answer = result2Wins;
  } else if (result1 == 'paper' && result2 == 'scissors'){
    answer = result2Wins;
  } else if (result1 == 'scissors' && result2 == 'paper'){
    answer = result1Wins;
  } else if (result1 == 'rock' && result2 == 'scissors'){
    answer = result1Wins;
  } else if (result1 == 'paper' && result2 == 'rock'){
    answer = result1Wins;
  } else {
    window.alert('You didn\'t enter the correct response - try again!');
  }
  return answer;
}

var winner = compareResults(computerResult, human);
console.log(winner);

// 14. After comparing, determine who has won; the computer or the human!

if (winner === 0) {
  window.alert('computer wins');
} else if(winner === 1) {
  window.alert('human wins');
} else  if(winner === -1){
  window.alert('it\s a tie');
}

// 15. Give yourself a high five for completing your first javascript game!


// BONUS: What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// ADVANCED TRACK
// 16. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1];

function findLargestNum(input) {
  var value = input[0];

  for (i=0; i<input.length; i++){
    if (input[i] > value) {
      value = input[i];
    }
  }
  return value;
}
console.log(findLargestNum(largestNum));

// HEADS OR TAILS?
// 17. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
console.log('Question 17');
console.log(coin);
var heads = 0;
var tails = 1;

var coin;
function flipCoin(){
  coin = Math.floor(Math.random()*2);
  console.log('flipped ' + (coin === heads ? 'heads' : 'tails'));
  // if (coin === heads){
  //   console.log('heads');
  // } else{
  //   console.log('tails');
  // }
};

// 18. Use a do/while loop to keep flipping the coin until you get tails.
console.log('Question 18');

do{
  flipCoin();
} while (coin != tails);


// CHESS BOARD
// 19. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
console.log('Question 19');
var i;

  for (i=0;i<8;i++){
    if (i%2 !== 0){
    console.log(' # # # #');
    } else{
    console.log('# # # # ');
    }
  }

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// 20. When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.
console.log('Question 20');

var gridSize = 8;

function createGrid(gridSize){
  var i;
  var j;
  var output;

  for (i=0; i<gridSize;i++){
    output = '';
    for (j=0;j<gridSize;j++){
      if(i%2 !== 0){
        if(j%2 === 0){
          output += (' ');
        } else {
          output += ('#');
        }
      } else {
        if(j%2 === 0){
          output += ('#');
        } else {
          output += (' ');
        }
      }
    }
    console.log(output);
  }
}
createGrid(gridSize);
