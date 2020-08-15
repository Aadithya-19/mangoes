const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, boyImg;
var engine, world;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	// for the boy 

	boy = createSprite(250, 550, 30, 50);
	boy.addImage("boy", boyImg);
	boy.scale = 0.15;

	// For the ground

	ground = new Ground(800, 650, 1600, 20);

	// For the tree

	Tree = new tree(1000, 400, 500, 500);

	// For the Mangoes
	mango1 = new Mango(950, 400, 20, 20);
	mango2 = new Mango(1200, 400, 20, 20);
	mango3 = new Mango(950, 300, 20, 20);
	mango4 = new Mango(1100, 400, 20, 20);
	mango5 = new Mango(1000, 250, 20, 20);
	mango6 = new Mango(1080, 300, 20, 20);
	mango7 = new Mango(850, 400, 20, 20);
	mango8 = new Mango(850, 300, 20, 20);
	mango9 = new Mango(1050, 200, 20, 20);
	mango10 = new Mango(1200, 320, 20, 20);

	// For the Stone
	
	stone = new Stone(170, 450, 30, 30);

	// For the rope

	Launcher = new launcher(stone.body,{x:170, y: 450});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  
  stone.display();

  Tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  detectollision(stone, mango8);
  detectollision(stone, mango9);
  detectollision(stone, mango10);

   Launcher.display();

  drawSprites();
}

function detectollision(stone,mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango);

	if(distance <= mango.r + stone.r){

		Matter.Body.setStatic(mango, false);

	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420});
		Launcher.attach(stone.body);
	}
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){

	Launcher.fly();

}