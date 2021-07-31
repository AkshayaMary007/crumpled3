//creating a dustbin class
class Dustbin {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }

    this.dustbinimage = loadImage("dustbin.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    //adding this.body to the world
    World.add(world, this.body);
  }
    display(){
      //creating a pos variable to represent this.body.position
      var pos = this.body.position;

      //setting rect mode
      rectMode(CENTER);

      //giving color
      fill("black");

      //giving strokeweight and stroke
      strokeWeight(4);
      stroke(14,14,14);

      //creating rect
      rect(pos.x, pos.y, this.width, this.height);
      image(this.dustbinimage,900,331,220,260);
    }
  };
  