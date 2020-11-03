var paperball, ground
var paperbasketpart1, paperbasketpart2, paperbasketpart3
var paperbasket, pbImg
var paperImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
  pbImg=loadImage("dustbingreen.png")
  paperImg=loadImage("paper.png")
}

function setup() {
	createCanvas(2100, 1800);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(222)
	engine = Engine.create();
	world = engine.world;
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	//World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 1650, width, 20 , {isStatic:true} );
 	World.add(world, ground);
  
  
  //paperball = createSprite
  paperball = new Paper(150, 900, 25)
  
  //Matter.Body.setAngle(paperbasketpart1, angle)
	paperbasket = new Paperbasket(1550, 1047.5-25, 320, 350)  
  

  var render = Render.create({ 
    element: document.body, 
    engine: engine, options: 
    { width: 1600, 
      height: 800, 
      wireframes: false } });
  
   Engine.run(engine);

   Render.run(render)
}


function draw() {
  
  
  
  rectMode(CENTER);
  background(100);
  
  drawSprites();
  
  paperbasket.display()
  
  paperball.display()
  
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperball.body, paperball.body.position, {x:42.5, y:-50});
	
  }
}



