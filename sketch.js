const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var chain;
function preload(){

    backgroundImg=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(150,305,300,170);
    bird1=new Bird(40,100);

    pig1=new Pig(810,320);
   

    log1=new Log(810,260,300,PI/2)

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2=new Pig(810,220);

    log2=new Log(810,180,300,PI/2);
    box5=new Box(810,160,70,70);

    log3=new Log(760,120,150,PI/7);
    log4=new Log(870,120,150,-PI/7);

   // log6=new Log(300,200,80,PI/4);
    chain1=new Slingshot(bird1.body,{x:200,y:50});
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
    pig1.display();
    pig2.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    platform.display();
   // log6.display();
    chain1.display();

//console.log(pig1.body.speed);
//console.log(pig2.body.speed)
    
}
function mouseDragged(){
       Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    chain1.fly()

}

function keyPressed(){
    if(keyCode===32){
        chain1.attach(bird1.body)
    }
}