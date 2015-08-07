<script>

  var guess, answer, message, userAttempts;
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
  			// did not properly terminate lines 11 and 13 in original code
  			// fixed next day
  	
    	userAttempts++;
  	}

  var recordCounter = document.getElementById('record-counter');
    recordCounter.innerHTML = message;

    // function = addToHintList() {
    //   var hintListItem = document.createElement('li';)
    //   var hintNode = document.createTextNode(hint1);
    //   hintListItem.appendChild(hintNode);
    //   document.getElementById('hint-list').appendChild(hintListItem);
  }
  	// alert(message);
  console.log(userAttempts);

</script>


