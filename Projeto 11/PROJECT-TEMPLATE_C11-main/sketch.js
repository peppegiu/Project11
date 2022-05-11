var sea,ship;
var seaImg,shipImg;


function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  background("blue");
  createCanvas(400,400);

  ship=createSprite(200,200)
  ship.velocityX=5;
  ship.scale = 0.75;
  ship.addAnimation(shipImg)
  

// Movendo o fundo
sea=createSprite(400,200);
sea.addImage(seaImg);
sea.velocityX=-5;
sea.scale=0.3;

ship = createSprite(130,200,30,30);
ship.addAnimation("movingShip",shipImg);
ship.scale =0.25;
}

sea.velocityX=-3;

function draw() {
 
    drawSprites();
    
    if(sea.x < 0){
      sea.x = sea.width/2;
    }
 
}
