const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,ground,ball,sand,sand1,sand2,sand3,sand4,sand5,hummer

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  /*var hummer_option = {
    restitution:2,
    friction:1.0,
    density:0.5 
  }
  hummer = Bodies.rectangle(400,300,60,15,hummer_option,)
  World.add(world,hummer)*/

  var ball_option = {
    restitution:0.3,
    friction:5,
    density:1    
    }   
    ball = Bodies.circle(700,600,20,ball_option)
    World.add(world,ball)

   var sand_option = {
    restitution:1.0,
    friction:5,
    density:1    
    }    
    sand = Bodies.circle(300,600,10,sand_option)
    World.add(world,sand)

    var sand1_option = {
    restitution:1.0,
    friction:5,
    density:1    
    }    
    sand1 = Bodies.circle(320,600,10,sand1_option)
    World.add(world,sand1)

     var sand2_option = {
     restitution:1.0,
     friction:5,
     density:1    
    }    
    sand2 = Bodies.circle(340,600,10,sand2_option)
    World.add(world,sand2)  

     var sand3_option = {
     restitution:1.0,
     friction:5,
     density:1    
    }    
    sand3 = Bodies.circle(360,600,10,sand3_option)
    World.add(world,sand3)
    
    var sand4_option = {
      restitution:1.0,
      friction:5,
      density:1    
      }    
      sand4 = Bodies.circle(380,600,10,sand4_option)
      World.add(world,sand4)

      var sand5_option = {
        restitution:1.0,
        friction:5,
        density:1    
        }    
        sand5 = Bodies.circle(280,600,10,sand5_option)
        World.add(world,sand5)  
    
   hummer = new Hummer (400,300,PI/2)      
   box1 = new Box(400,600,50,50)
   box2 = new Box(150,600,50,50)	
   ground = new Ground(400,690,900,20) 
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  

  ground.display();
  box1.display();
  box2.display();
  hummer.display();

  ellipseMode(RADIUS)
  fill ("yellow")
  strokeWeight(5)
  stroke("orange")
  ellipse(ball.position.x,ball.position.y,20)

  ellipseMode(RADIUS)
  fill ("brown")
  strokeWeight(5)
  stroke("red")
  ellipse(sand.position.x,sand.position.y,10) 
  
  ellipseMode(RADIUS)
  fill ("brown")
  strokeWeight(5)
  stroke("red")
  ellipse(sand1.position.x,sand1.position.y,10) 

  ellipseMode(RADIUS)
  fill ("brown")
  strokeWeight(5)
  stroke("red")
  ellipse(sand2.position.x,sand2.position.y,10) 

  ellipseMode(RADIUS)
  fill ("brown")
  strokeWeight(5)
  stroke("red")
  ellipse(sand3.position.x,sand3.position.y,10) 

  ellipseMode(RADIUS)
  fill ("brown")
  strokeWeight(5)
  stroke("red")
  ellipse(sand4.position.x,sand4.position.y,10) 

  ellipseMode(RADIUS)
  fill ("brown")
  strokeWeight(5)
  stroke("red")
  ellipse(sand5.position.x,sand5.position.y,10) 
  
  /*rectMode (CENTER)
  fill ("lightgreen")
  strokeWeight(5)
  stroke("green")
  rect(hummer.position.x,hummer.position.y,60,15)*/

  drawSprites();
 
}



