const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
	world = engine.world;
	Ball = new Balls(400, 300, 70);
	Ground = new Ground(800,590, width, 30);
	Left = new Bin(1200, 470, 30, 150);
	Right = new Bin(1400, 470, 30, 150);
	Down = new Bins(1300, 470, 230, 210);
	Engine.run(engine);  
}
function draw() {
  rectMode(CENTER);
  background(220);
  Ball.display();
  Ground.display();
  Down.display();
  keyPressed();
  drawSprites();
}
function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(Ball.body,Ball.body.position,{x : 85, y : -85});
}
if (Ball.body.position.x > 610) {
	Matter.Body.applyForce(Ball.body,{x : Ball.body.position.x, y : Ball.body.position.y},{x : -85, y : 85});
}
}
