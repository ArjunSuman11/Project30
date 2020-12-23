const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var Polygon;
var Polygon_img;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block11, block12, block13, block14, block15, block16, block17;
var sling;

function preload(){
    Polygon_img=loadImage("Sprites/polygon.png");
}

var options={
    restitution:0
}
function setup(){
    var canvas = createCanvas(1300, 400);
    engine=Engine.create();
    world=engine.world;

    //creating the ground or base
    ground1 = new Ground(300 ,390 , 2000, 10);

    //creating the polygon
    Polygon  =Bodies.circle(50, 250, 20, options);
    World.add(world, Polygon);
    
    //creating the constraint
    //sling = new SlingShot();
    console.log('test'+sling);
    sling=new SlingShot(Polygon.body,{x:200,y:500});
    //creating the blocks
    block2= new Box(250, 260, 40 ,40);
    block3 = new Box(300, 260, 40, 40);
    block4= new Box(400, 260, 40, 40);
    block5=new Box(200, 260, 40 , 40);
    block6= new Box(350, 260, 40 , 40);
    block7 =new Box(220, 210, 40 , 40);
    block8= new Box(270, 210, 40 , 40 );
}
function draw(){
    background(0);
    rectMode(CENTER);
        //displaying
    ground1.display();
    
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    

//adding image to the polygon that is created
imageMode(CENTER);
image(Polygon_img, Polygon.position.x, Polygon.position.y, 40 ,40);
}

function keyPressed(){
    if(keyCode===32){
    sling.attach(Polygon.body);
    }
}

