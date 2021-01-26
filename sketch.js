
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	bob1 = new Bob(340,450,30);
	bob2 = new Bob(400,450,30);
	bob3 = new Bob(460,450,30);
	bob4 = new Bob(520,450,30);
	bob5 = new Bob(580,450,30);


	chain1 = new Chain(bob1.body, {x:340,y:200});
	chain2 = new Chain(bob2.body, {x:400,y:200});
	chain3 = new Chain(bob3.body, {x:460,y:200});
	chain4 = new Chain(bob4.body, {x:520,y:200});
	chain5 = new Chain(bob5.body, {x:580,y:200});



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();

  bob4.display();
  bob5.display();
  
  
  drawSprites();
 
}


function keyPressed(){

	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position ,  { x: -50 , y: -40})
	}
}


/*function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x: mouseX, y:mouseY})
}
*/