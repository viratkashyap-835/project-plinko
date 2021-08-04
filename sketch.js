const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
     const Bodies = Matter.Bodies;

var engine,world; 

var plinkos=[];
var divisions=[];
var balls=[];
var ball;
var ground;
var score=0,count=0;
var gameState="start";


var divisionHeight = 300;

function setup() {

  
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,480,10);

  for(var j = 40; j<= width; j = j+80){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  for(var j = 15; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,345))
  }
  for(var j = 15; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,385))
  }
  for(var j = 15; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,425))
  }
  for(var j = 15; j<= width-10; j = j+80){
    plinkos.push(new Plinko(j ,465))
  }
  for(var k = 0; k <=width; k = k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

}

function draw() {
  background(0);
  textSize(30);
  fill("white");
  text("Score="+score,50,140);
  text("500",5,550);
  text("400",100,550);
  text("300",195,550);
  text("200",390,550);
  text("100",485,550);
  text("200",100,550);
  if(gameState==="end"){
    textSize(100);
    text("Game Over");
  }
   
  for(var k = 0; k<divisions.length;k++){
    divisions[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

  if(ball!==null){
    ball.display();
    if(ball.body.position.x<300){
      score+=500;
      ball=null;
      if(count>=5){
        gameState="end";
      }
    }
    else if(ball.body.position.x>600 && ball.body.position.x>301){
      score=score+100;
      ball=null;
      if(count>=5)
      gameState="end";
    }
    else if(ball.position.x<900 && ball.body.position.x>601){
      score+=200;
      ball=null;
      if(count>=5)
      gameState="end";
    }
  }
  Engine.update(engine);
  ground.display();

 /* if(frameCount % 60 === 0){
  
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
  }

  
  
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }*/




 
  
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    ball=new Ball(mouseX,10,10,10);
  }
}