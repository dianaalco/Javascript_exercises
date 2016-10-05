var myrover= {
  position: [0,0];
  direction: ['N', 'S', 'E', 'W'];
  
};

function getInstructions(commands){
  var instructions = commands.split(" ");
  return instructions;
}




function movements(instructions){
  for (var i = 0; i < instructions.length; i++){

  	if (myrover.toStop === false){

    switch (instructions[i]){
      case 'f':
      move('f');
      break;

      case 'b':
      move('b');
      break;

      case 'l':
      turnLeft();
      break;

      case 'r':
      turnRight();
      break;
    }
  }
}
}


function turnRight(r){
  if (myrover.currentDirection +1 <= 3){
      myrover.currentDirection++;
  } else {
      myrover.currentDirection = 0;
  }
}

function turnLeft(l){
  if (myrover.currentDirection -1 >= 1){
      myrover.currentDirection--;
  } else {
      myrover.currentDirection = 0;
  }
}


function move(where){
	switch (myrover.currentDirection){

		case 0:
		if (where === 'f'){
			if (myrover.position[0] + 1 <=9){
				 if (!obstacleDetector(true, myrover.position[0] + 1)) {
				myrover.position[0]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 0)){	
				myrover.position[0] = 0;
				} else {
					break;
				}
			}
				
		} else {
			if (myrover.position[0] - 1 >=0){
				 if (!obstacleDetector(true, myrover.position[0] - 1)) {
				myrover.position[0]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 9)){	
				myrover.position[0] = 9;
				} else {
					break;
				}
			}
		}	
		break;

		case 1: //Make a move while facing East
		if (where === 'f'){ 
			if (myrover.position[1] + 1 <=9){
				 if (!obstacleDetector(false, myrover.position[1] + 1)) {
				myrover.position[1]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(false, 0)){	
				myrover.position[1] = 0;
				} else {
					break;
				}
			}
				
		} else {
			if (myrover.position[1] - 1 >=0){
				 if (!obstacleDetector(false, myrover.position[1] - 1)) {
				myrover.position[1]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetect(false, 9)){	
				myrover.position[1] = 9;
				} else {
					break;
				}
			}
		}	
		break;

		case 2:
		if (where === 'f'){
			if (myrover.position[0] - 1 >=0){
				 if (!obstacleDetector(true, myrover.position[0] - 1)) {
				myrover.position[0]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 9)){	
				myrover.position[0] = 9;
				} else {
					break;
				}
			}
				
		} else {
			if (myrover.position[0] + 1 <=9){
				 if (!obstacleDetector(true, myrover.position[0] + 1)) {
				myrover.position[0]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(true, 0)){	
				myrover.position[0] = 0;
				} else {
					break;
				}
			}
		}	
		break;

		case 3:
		if (where === 'f'){
			if (myrover.position[1] - 1 >=0){
				 if (!obstacleDetector(false, myrover.position[1] - 1)) {
				myrover.position[1]--;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(false, 9)){	
				myrover.position[1] = 9;
				} else {
					break;
				}
			}
				
		} else {
			if (myrover.position[1] + 1 <=9){
				 if (!obstacleDetector(false, myrover.position[1] + 1)) {
				myrover.position[1]++;
				} else {
					break;
				}
			} else {
				if (!obstacleDetector(false, 0)){	
				myrover.position[1] = 0;
				} else {
					break;
				}
			}
		}	
		break;
	}
}

function stopObstacle(yPosition, futurePosition){

	if (yPosition === true){
		for (var i = 0; i < myrover.obstacle.length; i++){
			if (myrover.obstacle[i][0] === futurePosition && myrover.obstacle[i][1] === myrover.position[1]){
				console.log("Your rover cannot continue with that alien cow in the middle " + myrover.obstacle[i] + ". Try another direction");
				myrover.toStop = true;
				return myrover.toStop				
			}
		}
	}

	if (yPosition === false){
		for (var i = 0; i < myrover.obstacle.length; i++){
			if (myrover.obstacle[i][0] === myrover.position[0] && myrover.obstacle[i][1] === futurePosition){
				console.log("Your rover is about to crash [' + myrover.obstacle[i]]");
				myrover.toStop = true;
				return myrover.toStop				
			}
		}
	}
}


movements('fbrffff'); 
console.log("Your rover is here: [" + myrover.position[0] + ", " + myrover.position[1] + "]")
console.log("Your rover is here: " + myrover.direction[myrover.currentDirection]);

