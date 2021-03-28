const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,iron,stone,wood,diamond;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(600,300,PI)
    stone = new Stone(600,300,20,40)
    iron = new Iron(600,300,20,40)
    diamond = new Diamond(600,300,20,40)
    wood = new Wood(600,300,20,30)
  


}

function draw(){
    background("lightBlue"); 
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    wood.display();
    diamond.display();
    
 
}