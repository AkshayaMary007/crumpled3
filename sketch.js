const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

const Constraint = Matter.Constraint;

var paper;

var score =0;

var ground;

var dustbinside1,dustbinside2,dustbinside3;

var backgroundImg;
var bg = "bg1.png";

var launcher;

function setup() {
createCanvas(1300,600);

//creating world and engine
engine = Engine.create();

world = engine.world;

//creating ground, dustbin and paper
ground = new Ground(683,600,1366,20); 

dustbinside1 = new Dustbin(1010,576,220,25);
dustbinside2 = new Dustbin(1100,444,25,220);
dustbinside3 = new Dustbin(915,444,25,220);

paper = new Paper(200,250,80,80);

launcher = new Launcher(paper.body,{x:200,y:250});

}

function preload(){
  getBackgroundImg();
  
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  
  rectMode(CENTER);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50);


 

  //setting text
  textSize(40);
  textFont("Times New Roman");
  fill("black");
  text("Drag And Leave The Waste To Throw Inside The Dustbin",200,80);

  //updating engine
  Engine.update(engine);


  //telling to display ground, dustbin and paper
  ground.display();
  paper.display();
  dustbinside1.display();
  dustbinside2.display();
  dustbinside3.display();
  launcher.display();
  
}

//telling to apply force when 'up' arrow is pressed
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x: mouseX , y: mouseY});
  }

function mouseReleased(){
  launcher.fly();
}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
   
    
    bg="bg1.png";

    
  }
  
      
  

  
    if(hour>=0600 && hour<=1900){
      
     
      bg = "bg2.jpg";
     
      
     

      }
  backgroundImg=loadImage(bg);
  
}