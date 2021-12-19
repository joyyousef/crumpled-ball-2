
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Box(1200,610, 20, 100)
	box2=new Box(1300, 650, 200, 20)
	box3=new Box(1400,610, 20, 100)
	ground = Bodies.rectangle(width/2, 670, width, 20 , {isStatic:true} );
	World.add(world, ground);
	paper=new Paper(200,450,40)
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("brown")
  rect(width/2,670,width,40);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
}  

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{
		  x:85,y:-85
	  })
	   
	 }
   }

