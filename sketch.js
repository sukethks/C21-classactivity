var movingrect, fixedrect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  movingrect= createSprite(400, 200, 70, 50);
  fixedrect = createSprite(500, 200, 50, 70);
  rect1 = createSprite(400, 220, 50, 70);
  rect2 = createSprite(300, 220, 50, 70);

  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  rect1.shapeColor = "blue";
  rect2.shapeColor = "yellow";


  rect1.velocityX = -3;
  rect2.velocityX =  3;
 //  rect1.velocityY = 3;
  //rect2.velocityY =  3;

}

function draw() {
  background(255,255,255); 
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  

  if(isTouching(rect1, movingrect)){
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "red";

    rect1.shapeColor = "pink";
    }
  else{

  bounceOff(rect1,rect2);
  
    fixedrect.shapeColor = "green";
    rect1.shapeColor = "blue"
  }

  bounceOff(rect1,rect2);

  drawSprites();
}

//this function will take two objects and detect collision between them
//yes or no - true(1) or false(0)
//arguments/parameters
function isTouching(object1, object2 ){

  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2 )    
    {
        return true;
    }
    else 
     {
       return false;
     }
  } 
 


function bounceOff(object1, object2){

  if(object1.x - object2.x < object1.width/2 + object2.width/2 &&
    object2.x - object1.x < object1.width/2 + object2.width/2)  
    {
        object1.velocityX = object1.velocityX *(-1);
        object2.velocityX = object2.velocityX *(-1);

    }
   
  if(object1.y - object2.y < object1.height/2 + object2.height/2 &&
      object2.y - object1.y < object1.height/2 + object2.height/2)  
    {
          object1.velocityY = object1.velocityY *(-1);
          object2.velocityY = object2.velocityY *(-1);
  
    }

}