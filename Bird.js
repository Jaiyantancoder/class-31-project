class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");

    this.birdTrajectory = [];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

var pos = [this.body.position.x,this.body.position.y]

if(this.body.position.x>200&&this.body.speed>10){

this.birdTrajectory.push(pos);

}
for(var i = 0;i<this.birdTrajectory.length;i++){

image(this.smokeimage,this.birdTrajectory[i][0],this.birdTrajectory[i][1]);


}




  }
}
