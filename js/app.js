'use strict';

//Check file is connected

//console.log('this file is connected');


//Prompt user for name

var userName = prompt('What\'s your name?','');

//Greet user

alert('hi ' + userName + '!');

//first question

var quest1 = prompt('Question 1: Was I born in Iowa?', '');
var lowerCaseQuest1 = quest1.toLowerCase();

if (lowerCaseQuest1 === ('yes')) {
  alert('Nope. I was born in Palo Alto, CA.');
}
else if (lowerCaseQuest1 === ('no')) {
  alert('Correct! I was born in Stanford General hospital in Palo Alto, CA. The same doctor that delivered Dan Marino\'s son delivered me...so I\'m basically famous!');
}
else {
  alert('Please enter yes or no');
  var tryAgain = prompt('Please enter yes or no. Was I born in Iowa?');
}
if (tryAgain === ('yes')) {
  alert('Nope. I was born in Palo Alto, CA.');
}
else if (tryAgain === ('no')) {
  alert('Correct! I was born in Stanford General hospital in Palo Alto, CA. The same doctor that delivered Dan Marino\'s son delivered me...so I\'m basically famous!');
}


var quest2 = prompt('Question 2: Have I been to China?', 'yes or no');
var lowerCaseQuest2 = quest2.toLowerCase();

if (lowerCaseQuest2 === ('yes')) {
  alert('Nice try, but no. I do teach Chinese kids English online, though.');
}
else if (lowerCaseQuest2 === ('no')) {
  alert('Right on. I do telecommute there as superhero  \'Teacher Jacob.\' He\'s just your friendly neighborhood online ESL teacher.');
}
else {
  var tryAgain2 = prompt('Please enter yes or no. Have I been to China?');

  if (tryAgain2 === ('yes')) {
    alert('Nice try, but no. I do teach Chinese kids English online, though.');
  }
  else if (tryAgain2 === ('no')) {
    alert('Right on. I do telecommute there as superhero  \'Teacher Jacob.\' He\'s just your friendly neighborhood online ESL teacher.');
  }
}
console.log('hi');
var quest3 = prompt('Question 3: Do I like whole milk?', 'yes or no');
var lowerCaseQuest3 = quest3.toLowerCase();

if (lowerCaseQuest3 === ('yes')) {
  alert('Blah, no! I\'m lactose intolerant!');
}

else if (lowerCaseQuest3 === ('no')) {
  alert('Subtle skills, my hu-man! Yeah, I\'m more of a coconut milk kind of guy.');
}

else {
  alert('Please enter yes or no');
}

var tryAgain3 = prompt('Please enter yes or no. Hint: S-y Yah later.');


if (tryAgain3 === ('yes')) {
  alert('Explosively, with a side of  no!');
}

if (tryAgain3 === ('no')) {
  alert('Finally, you got it! Yeah, my body doesn\'t make the enzyme required to digest milk. I\'m lactose intolerant!');
}
console.log('d');


var quest4 = prompt('Question 4: Is my favorite book the Bible?', 'yes or no');

var lowerCaseQuest4 = quest4.toLowerCase();

if (lowerCaseQuest4 === ('yes')) {
  alert('That\'s correct! I prefer to read it in the original language: Hebrew');
}
else if (lowerCaseQuest4 === ('no')) {
  alert('Easy mistake. Still, it\'s the #1 bestseller of all time for a reason. Don\'t believe the anti-hype! At the very, very least it\'s highly relevant to our world!');
}

else {
  alert('Please enter yes or no');

  var tryAgain4 = prompt('Please enter yes or no. Is the Holy Writ my fav?');
}
if (tryAgain4 === ('yes')) {
  alert('Solid choice!');
}
else if (tryAgain4 === ('no')) {
  alert('Actually I love to read the Hebrew Bible and the Hebrew Gospel of Matthew!');
}
console.log('question 4');

var quest5 = prompt('Question 5: Do I speak French?', 'oui or non');

var lowerCaseQuest5 = quest5.toLowerCase();

if (lowerCaseQuest5 === ('oui')) {
  alert('Oui, oui!');
}
else if (lowerCaseQuest5 === ('non'))

{
  alert('Mais, oui! But, yes!');
}

else {

  var tryAgain5 = prompt('Please enter oui or no. Do I speak French?');
}
if (tryAgain5 === ('oui')) {
  alert('Exactement!');
}
else if (tryAgain5 === ('non')) {
  alert('Faux! I do speak French.');
}
console.log('question 5');

alert('Thanks, ' + userName + '!');


var numberGame = prompt('Guess a number from one to ten!', '');

while (numberGame > 7) {
  numberGame = prompt('Too high...please enter another number.');
}
while (numberGame < 7) {
  numberGame = prompt('Too high...please enter another number.');
}

if (numberGame === 7) {
  alert('You win!');
}
