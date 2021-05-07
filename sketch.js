const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bg;

var snow=[];

function preload(){
bg=loadImage("snow2.jpg");
}

function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(800,400);
    

}

function draw(){
Engine.update(engine);
background(bg); 

if(frameCount%10===0) {
    snow.push(new Snow(random(0, 800), 0, 20))
    
  }
  for(var j = 0; j<snow.length; j++) {
    snow[j].display()
  }

drawSprites();
}