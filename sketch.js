const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var base;
var bridge;
var stone;
var stone_con;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  base = new Base(200,680,600,20);

  //creating stone 
  var stone_options={
    density:0.01
  };

  stone = Bodies.circle(300,300,20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  stone_con = new Link(bridge,stone);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)


}
  

function draw() {
  background(51);
  Engine.update(engine);



  drawSprite();
}