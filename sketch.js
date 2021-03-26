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
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 250 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	packageBody.position.x=70

	packageSprite=createSprite(width/2,250, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	line1=Bodies.rectangle(310,620,20,100,{isStatic:true})
	fill("red")
	World.add(world,line1)

	line1a=createSprite(310,620,20,100)
	line1a.shapeColor="red"
	
	line3=Bodies.rectangle(490,620,20,100,{isStatic:true})
	fill("red")
	World.add(world,line3)	

	line3a=createSprite(490,620,20,100)
	line3a.shapeColor="red"

	helicopterSprite=createSprite(width/2, 250, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	
	helicopterBody=Bodies.circle(width/2 , 250 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, helicopterBody);
	helicopterBody.position.x=70

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
  
	 line2=Bodies.rectangle(400,650,200,20,{isStatic:true})

	fill("red")
	World.add(world,line2)

	line2a=createSprite(400,650,200,20)
	line2a.shapeColor="red"

	Engine.run(engine);
  console.log(line1)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine)
  packageSprite.x=packageBody.position.x
  packageSprite.y=packageBody.position.y 
 // packageBody.position.x=helicopterBody.position.x
 // packageBody.position.y=helicopterBody.position.y                                                                                       
  helicopterSprite.x=helicopterBody.position.x                                                                                           
  helicopterSprite.y=helicopterBody.position.y                                                                                            
  rect(line1.position.x,line1.position.y,20,100)                                                                                           
  rect(line2.position.x,line2.position.y,200,20)                                                                                                                                                                                      
  rect(line3.position.x,line3.position.y,20,100)
//  if(packageSprite.isTouching(line2)){
//	  package              
  //}
   console.log(helicopterBody.position.x)
  packageBody.position.x=helicopterBody.position.x

  drawSprites();
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) { 
		helicopterBody.position.x=helicopterBody.position.x-370; translation={x:-370,y:0} 
		Matter.Body.translate(packageBody, translation)
	 } 
	else if (keyCode === RIGHT_ARROW) {
		 helicopterBody.position.x=helicopterBody.position.x+370; translation={x:370,y:0} 
	Matter.Body.translate(packageBody, translation) 
}	
     else if (keyCode === DOWN_ARROW) {
		  Matter.Body.setStatic(packageBody,false); } 
}
