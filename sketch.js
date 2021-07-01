const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

//create variables
var mon1, mon2, super1, super2, bg;

//preload variable names
var mon1Img, mon2Img, super1Img, super2Img, bgImg;

function preload() {
//preload the images here
mon1Img = loadImage("images/Monster-01.png");
mon2Img = loadImage("images/Monster-02.png");

super1Img = loadImage("images/Superhero-01.png");
super2Img = loadImage("images/Superhero-02.png");

bgImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  // create sprites here
  Obj_ground = new Ground(700, 600, 1500, 20);
  Obj_hero = new Hero(400,900,250);
  Obj_fly = new Fly(Obj_hero.body,{x:30,y:30});
  Obj_monster = new Monster(1400,300,250,250);

  Block1 = new Block(700,100,50,50);
  Block2 = new Block(700,100,50,50);
  Block3 = new Block(700,100,50,50);
  Block4 = new Block(700,100,50,50);
  Block5 = new Block(700,100,50,50);
  Block6 = new Block(700,100,50,50);
  Block7 = new Block(700,100,50,50);
  Block8 = new Block(700,100,50,50);
  Block9 = new Block(700,100,50,50);
  Block10 = new Block(700,100,50,50);

  Block14 = new Block(800,100,50,50);
  Block15 = new Block(800,100,50,50);
  Block16 = new Block(800,100,50,50);
  Block17 = new Block(800,100,50,50);
  Block18 = new Block(800,100,50,50);
  Block19 = new Block(800,100,50,50);
  Block20 = new Block(800,100,50,50);

  Block25 = new Block(900,100,50,50);
  Block26 = new Block(900,100,50,50);
  Block27 = new Block(900,100,50,50);
  Block28 = new Block(900,100,50,50);
  Block29 = new Block(900,100,50,50);
  Block30 = new Block(900,100,50,50);
  Block31 = new Block(900,100,50,50);

  Block34 = new Block(1000,100,50,50);
  Block35 = new Block(1000,100,50,50);
  Block36 = new Block(1000,100,50,50);
  Block37 = new Block(1000,100,50,50);
  Block38= new Block(1000,100,50,50);
  Block39= new Block(1000,100,50,50);
  Block40= new Block(1000,100,50,50);
  Block41= new Block(1000,100,50,50);
  Block42= new Block(1000,100,50,50);
  Block43 = new Block(1000,100,50,50);

  Block47 = new Block(1100,100,50,50);
  Block48 = new Block(1100,100,50,50);
  Block49 = new Block(1100,100,50,50);
  Block50 = new Block(1100,100,50,50);
  Block51 = new Block(1100,100,50,50);
  Block52 = new Block(1100,100,50,50);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  Obj_monster.display();
  Obj_fly.display();
  Obj_ground.display();
  Obj_hero.display(); 

  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  Block10.display();

  Block14.display();
  Block15.display();
  Block16.display();
  Block17.display();
  Block18.display();
  Block19.display();
  Block20.display();

  Block25.display();
  Block26.display();
  Block27.display();
  Block28.display();
  Block29.display();
  Block30.display();
  Block31.display();

  Block34.display();
  Block35.display();
  Block36.display();
  Block37.display();
  Block38.display();
  Block39.display();
  Block40.display();
  Block41.display();
  Block42.display();
  Block43.display();

  Block47.display();
  Block48.display();
  Block49.display();
  Block50.display();
  Block51.display();
  Block52.display();
}

function mouseDragged(){
  Matter.Body.setPosition(Obj_hero.body, {x: mouseX , y: mouseY});
}
