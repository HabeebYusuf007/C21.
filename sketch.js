
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, button1, right, left, top;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 700, width, 20)
	leftSide = new Ground(500, 625, 20, 120)
	rightSide = new Ground(700, 625, 20, 120)
	right = new Ground(800, 350, 20, 800)
	left = new Ground(0, 350, 20, 800)
	top = new Ground (width/2, 30, width, 20)

	button1 = createButton("right")
    button1.position(220,30)
    button1.size(50,50)
    button1.mouseClicked(hForce)

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,50, ball_options);
	World.add(world, ball)
  	rectMode(CENTER);
  	ellipseMode(RADIUS);
  

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftSide.display()
  rightSide.display()
  right.display()
  left.display()
  //top.display()
  ellipse(ball.position.x, ball.position.y, 20, 20)
  //drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.90, y:0})
  }

