const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var box;

var world,engine;

var database;


function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  box = createSprite(200,200,50,50);
  box.shapeColor = "red";
  
  database = firebase.database();
  console.log(database);
  

}

function draw() {
  background(0); 
  Engine.update(engine);


  drawSprites();
}
