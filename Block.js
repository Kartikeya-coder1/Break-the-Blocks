class Box{
  constructor(x, y, width, height){
      var options = {
          'restitution' : 0.4,
          isStatic: false        }
  

  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  // this.image = loadImage("package.png");
  World.add(world, this.body);
      }

  display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  

