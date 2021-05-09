const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
porygonImage=loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   stand =  new Ground(600,250,200,10)
box=new Box(580,220,20,20)
box2=new Box(560,220,20,20)
box3=new Box(540,220,20,20)
box4=new Box(600,220,20,20)
box5=new Box(580+40,220,20,20)
box6=new Box(570,190,20,20)
box7=new Box(590,190,20,20)
box8=new Box(610,190,20,20)
box9=new Box(550,190,20,20)
box10=new Box(580,160,20,20)
box11=new Box(600,160,20,20)
box12=new Box(620,160,20,20)
box13=new Box(640,160,20,20)
box14=new Box(600,140,20,20)

porygon=Bodies.circle(50,200,20)
World.add(world,porygon);

   
   slingshot = new SlingShot(this.porygon,{x:100,y:200});
}

function draw(){
    background(255);
    Engine.update(engine);

    ground.display()
    stand.display()
    box.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
imageMode(CENTER)
image(porygonImage,porygon.position.x,porygon.position.y,48,48);

    //strokeWeight(4);
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.porygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
        slingshot.attach(this.porygon)
    }
}