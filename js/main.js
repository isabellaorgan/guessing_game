
var guess, answer, message, userAttempts, guess1;
// answer is actual number of records I own
answer = 380;
userAttempts = 0;
message = "Don't worry about it, how could you have known?";
console.log(answer);

  while (userAttempts < 5 && guess != answer){
   guess = prompt("How many vinyl records do I own?");
    if (guess == answer) {
      message = "You must be a stalker!";
    }
    userAttempts++;
  }

var recordCounter = document.getElementById('record-counter');
  recordCounter.innerHTML = message;

  function addToGuessList() {
   var guessListItem = document.createElement('li');
   var guessNode = document.createTextNode(guess1);
   guessListItem.appendChild(guessNode);
   document.getElementById('guess-list').appendChild(guessListItem);
  }
  // alert(message);
  console.log(userAttempts);






