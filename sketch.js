var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(800,200,80,30);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect.debug=true;
   fixedRect.velocityX=5;
   movingRect.velocityX=-5;
}

function draw() {
  background(0); 
 //   movingRect.x=mouseX;
  // movingRect.y=mouseY;
//console.log( movingRect.y-fixedRect.y);
//console.log("movingrect"+movingRect.x);
 
   bounceOff(movingRect,fixedRect);
  drawSprites();
}
 