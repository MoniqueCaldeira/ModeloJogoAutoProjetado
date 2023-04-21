

var box;



function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  box = createSprite(200,200,50,50);
  box.shapeColor = "red";
  
  

}

function draw() {
  background(0); 


  drawSprites();
}
