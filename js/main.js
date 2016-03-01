
var guess, answer, message, userAttempts, guess1;
answer = 380;
userAttempts = 0;
message = "Don't worry about it, how could you have known?";
console.log(answer);

  while (userAttempts < 5 && guess != answer) {
   guess = prompt("How many vinyl records do I own?");
   addToGuessList(guess);
    if (guess == answer) {
      message = "You must be a stalker!";
    }
    userAttempts++;
  }

  console.log(guess1);

var recordCounter = document.getElementById('record-counter');
  recordCounter.innerHTML = message;

  function addToGuessList(gs) {
   var guessListItem = document.createElement('li');
   var guessNode = document.createTextNode(gs);
   guessListItem.appendChild(guessNode);
   document.getElementById('guesslist').appendChild(guessListItem);
  
  }







