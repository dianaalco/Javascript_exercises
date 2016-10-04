var user = {}
var responses = []
	
function firstQuestion() {
  var answer = prompt("What is your name?")
  user.name = answer
}


function secondQuestion() {

  var answer = prompt("Have you ever seen 'Young Frankenstein'? (Yes or No)")

  if (answer.toLowerCase() === 'yes') {
    answer = true;
  } 
  else if (answer.toLowerCase() === 'no') {
    answer = false;
  } 
  else {
    alert("Hey, I told you to answer Yes or No");
    return secondQuestion();
  }
  responses.push(answer); 
}


function thirdQuestion() {
    
    var answer = prompt("Who's your favorite character? (Choose a number, WTF) \n1.Dr Frankenstein \n2.Igor \n3.The awesome monster \n4.The abnormal brain");

    switch (answer.toLowerCase()) {
        case '1':
            answer = false;
            break;
        case '2':
            answer = false;
            break;
        case '3':
            answer = true;
            break;
        case '4':
            answer = false;
            break;
        default:
            alert("Again? Do I need to repeat that you need to choose a number?");
        return thirdQuestion();
    }

    responses.push(answer);
}


function forthQuestion() {
    
    var answer = prompt("Do you remember which of the following movies is not directed by the same dude? (Remember to choose a number, for God's sake) \n1.Spaceballs \n2.Titanic \n3.Robin Hood: Men in tights \n4.Get Smart");

    switch (answer.toLowerCase()) {
        case '1':
            answer = false;
            break;
        case '2':
            answer = true;
            break;
        case '3':
            answer = false;
            break;
        case '4':
            answer = false;
            break;
        default:
            alert("Come on, you are not paying attention. Choose a damned number!");
        
        return forthQuestion();
    }

    responses.push(answer);
}



function fifthQuestion() {

  	var answer = prompt("Would you like a second part of Young Frankenstein? (Yes or No)")

  	if (answer.toLowerCase() === 'yes') {
    	answer = true;
  	} 
  	else if (answer.toLowerCase() === 'no') {
    	answer = false;
  	} 
  	else {
    	alert("You really have a serious problem of understanding. Choose Yes or No");
  
  	return fifthQuestion();
}

  responses.push(answer); 
}



function evaluate(responses) {
var totalRights = 0; 
var totalWrongs = 0;

	for (var i = 0; i < responses.length; i++){
		if (responses[i] === true){
			totalRights += 1;
			totalWrongs += 0;
			user.tright = totalRights;
			user.twrong = totalWrongs;
		}
		else {
			totalWrongs += 1;
			user.twrong = totalWrongs;
		}
	}
	showResults(); 
}

function showResults() {
	alert('Hi ' + user.name + ', you have answered ' + ((user.tright) + (user.twrong)) + ' questions.');
	alert('Right answers: ' + user.tright);
	alert('Wrong answers: ' + user.twrong);
}


firstQuestion();
console.log(user);
secondQuestion();
console.log(responses[0]);
thirdQuestion();
console.log(responses[1]);
forthQuestion();
console.log(responses[2]);
fifthQuestion();
console.log(responses[3]);

evaluate(responses);

