const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;

var divisions=[];
var plinkos=[];
var particles=[];

var divisionHeight=200;
var randX;

function setup() {
  createCanvas(480,650);

  //to craete engine and world
  engine=Engine.create();
  world=engine.world;

  //to make ground
  ground=new Ground(width/2,height-5,width,10);

  //to make divisions
  for(var ctr=0;ctr<=width;ctr=ctr+80){
    divisions.push(new Division(ctr,height-divisionHeight/2,10,divisionHeight));
  }

  //to make plinkos
    for(var ctr=50;ctr<=width;ctr=ctr+50){

      //for first row
      plinkos.push(new Plinko(ctr,100,10)); 
      //for third row
      plinkos.push(new Plinko(ctr,300,10)); 
    }
    for(var ctr=10;ctr<=width+30;ctr=ctr+50){

      //for second row
      plinkos.push(new Plinko(ctr-40,200,10));
      //for fourth row
      plinkos.push(new Plinko(ctr,400,10)); 
    }

  //to make particles
  for(var ctr=0;ctr<=width;ctr=ctr+80){
    randX=random(20,width-20);
    particles.push(new Particle(randX,-3,10));
  }




    
   

   
 
  Engine.run(engine);
}

function draw() {
  background(0);  
  Engine.update(engine);

  //to display ground
  ground.display();



    //to display plinkos
    for(var index=0;index<plinkos.length;index++){
      plinkos[index].display();
  }

//to display new particle at evry 70th frame
if(frameCount%70===0){
    randX=random(20,width-20);
    particles.push(new Particle(randX,10,10));
}

for(var index=0;index<particles.length;index++){
  particles[index].display();
}

//to display divisions
  for(var index=0;index<divisions.length;index++){
    divisions[index].display();
}


}