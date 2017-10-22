// General objects and variables

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelog: []
};

var input = "rffrfflfrff";

// Functions

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction ="S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
console.log("Rover is now facing " + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "W":
    rover.direction ="N";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
  }
console.log("Rover is now facing " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    case "N":
    rover.y = rover.y-1;
    break;
    case "W":
    rover.x = rover.x-1;
    break;
    case "S":
    rover.y = rover.y+1;
    break;
    case "E":
    rover.x = rover.x+1;
    break;
  }
  console.log ("new position " + rover.x + rover.y);
}

function commands(input) {
  for(var i=0; i<= input.length;i++){
    if(input[i] === "f"){
      moveForward(rover);
    } else if (input[i] === "r"){
      turnRight(rover);
    } else if (input[i] === "l"){
      turnLeft(rover);
    }
    rover.travelog.push(rover.x+","+rover.y);
  }
  console.log(rover.travelog);
}
