const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,score=0;
var ball;
var gameState=0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
    ground1= new Ground(1000,200,300,20);

    box1=new Box(1000,350);
    box2=new Box(1035,350);
    box3=new Box(1070,350);
    box4=new Box(1105,350);
    box5=new Box(1000,150);
    box6=new Box(1000,150);
    ball=new Ball(200,150);
    sling=new SlingShot(ball.body,{x:205,y:220});
}

function draw(){
    background(255);
    Engine.update(engine);
     ground.display();
     ground1.display();
     ball.display();
     box1.display();
     box1.score();
     box2.display();
     box2.score();
     box3.display();
     box3.score();
     box4.display();
     box4.score();
     box5.display();
     box5.score();
     box6.display();
     box6.score();
     sling.display();
     fill("black");
     textSize(20);
     push();
     strokeWeight(1);
     text("Score:"+ score, 700,50);
     pop();
     
}
function mouseDragged(){
    if(gameState===0){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
    
}
function mouseReleased(){
    sling.fly();
    gameState=1;
}

