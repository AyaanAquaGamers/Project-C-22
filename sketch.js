var packageBody,ground,helicopterBody
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var line2,line2a
var line1,line1a
var line3,line3a
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2,250, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(70, 250, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(70 , 250 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 line1a=createSprite(310,600,20,100)
	line1a.shapeColor="red"

    line1=Bodies.rectangle(310,600,20,100,{isStatic:true})
	World.add(world,line1)
	
	line2a=createSprite(400,650,200,20)
	line2a.shapeColor="red"
	

	line2=Bodies.rectangle(400,650,200,20,{isStatic:true})
	World.add(world,line2)

	line3a=createSprite(490,600,20,100)
	line3a.shapeColor="red"

	line3=Bodies.rectangle(490,600,20,100,{isStatic:true})
	World.add(world,line3)

	
	Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y     
                                                                                   
 
 

  drawSprites();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) { 
		helicopterSprite.x=helicopterSprite.x-20;
		 translation={x:-20,y:0} 
		Matter.Body.translate(packageBody, translation)
	 } 
	
	 if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		 translation={x:20,y:0} 
	Matter.Body.translate(packageBody, translation) 
}	
     
if (keyCode === DOWN_ARROW) {
		  Matter.Body.setStatic(packageBody,false); } 
}
