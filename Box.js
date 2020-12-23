class Box  {
    constructor(x, y, width, height){
      var options={
        rstitution : 0.8
      }
        this.body=Bodies.rectangle(x, y, width, height);
        this.visibilty=255;
        World.add(world, this.body);
    }
  display(){
    //rect(0, 0, 0 ,0);
    if(this.body.speed<2){
      this.display();
    }else{
      World.remove(world, this.body);
      push();
      var pos=this.body.position;
      this.visibilty-=5;
      tint(255, this.visibility);
      rect(pos.x, pos.y, 40, 40);
    }
    rect(this.body.position.x, this.body.position.y, this.body.position.width, this.body.position.height);
    fill("white");
  }
};
  