const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  push();
  translate(tower.position.x, tower.position.y);
  rotate(tower.angle);
  imageMode(CENTER);
  image(towerImage, 0, 0, 160, 310);
  pop();

  cannon.display();
  cannonBall.display();
}


