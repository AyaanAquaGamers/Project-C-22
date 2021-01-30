var line1,line2,line3
var packageBody,ground
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
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
	
	engine = Engine.create();
	world = engine.world;

	line1=Bodies.rectangle(310,620,20,100,{isStatic:true})
	fill("red")
	World.add(world,line1)

	line2=Bodies.rectangle(400,650,200,20,{isStatic:true})
	fill("red")
	World.add(world,line2)

	line3=Bodies.rectangle(490,620,20,100,{isStatic:true})
	fill("red")
	World.add(world,line3)
	

	packageSprite=createSprite(width/2,250, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 250, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	packageBody = Bodies.circle(width/2 , 250 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	Engine.run(engine);
  console.log(line1)
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(line1.position.x,line1.position.y,20,100)
  rect(line2.position.x,line2.position.y,200,20)
  rect(line3.position.x,line3.position.y,20,100)
  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode===DOWN_ARROW ) {
Matter.Body.setStatic(packageBody,false)
  }
}


