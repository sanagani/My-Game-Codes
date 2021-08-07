var sprite

function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,20,20); 
}

function draw() 
{
  background(30);
  drawSprites();
  if(keyIsDown(RIGHT_ARROW)){
    sprite.position.x= sprite.position.x+3;
  }

  if(keyIsDown(DOWN_ARROW)){
    sprite.position.y=sprite.position.y+3;
  }
}




