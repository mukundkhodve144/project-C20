var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80, 80, 80);

  speed = random(55, 90);
  weight = random(400, 1500);

  car.velocityX = speed;

}

function draw() {
  background(0);  

   if(car.collide(wall)){
     deformation();
     car.velocityX = 0;
   }
  
  fill("yellow")
  textSize(19);
  text("deformation:"+Math.round((0.5* weight* speed* speed)/22500),1150,350);

fill("red")
textSize(19);
text("deformation>=180 is considered to be dangerous for passengers",50,310);

fill("yellow")
textSize(19);
text("deformation between 80 to 180 is considered to be average for passengers",50,350);

fill("green")
textSize(19);
text("deformation < 80 is considered to be good for passengers",50,270);


  drawSprites();
}

function deformation () {

  var deformation = (0.5* weight* speed* speed)/22500;
  if(deformation>180){
    car.shapeColor = color(255, 0, 0);
  }

  if(deformation<180 && deformation>100){
    car.shapeColor = color(230, 230, 0);
  }

  if(deformation<100){
    car.shapeColor = color(0, 255, 0);
  }
  
}
