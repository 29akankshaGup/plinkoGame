class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution:1,
          friction:0.1
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.r=r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
