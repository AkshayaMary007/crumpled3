//creating a paper class
class Paper {
  constructor(x,y,width,height) {
    var options= {
       'restitution':0.3,
       'friction':2,
       'density':1.3
      }

    this.paperimage = loadImage("paper.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    //adding this.body to the world
    World.add(world,this.body);

  }
  display(){
    //creating a pos variable to represent this.body.position
    var pos = this.body.position;

    push();

    //setting image mode
    imageMode(CENTER);
    
    //creating a image 
    image(this.paperimage,pos.x,pos.y,this.width,this.height);
    
    pop();
  }
  };
   