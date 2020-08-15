class Mango{
    constructor(x, y, width, height){
      var options = {
        isStatic : false,
        restuition : 0,
        friction : 1,
      }

      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.image = loadImage("mango.png");

    }
    display(){
        push();      
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image,0, 0, 50, 50);
        pop();
    }
    
    fly(){

      this.chain.bodyA = null;

  }
}



// constructor(x,y){
//   super(x,y,50,50);
//   this.image = loadImage("mango.png");
// }

// display() {
//   super.display();
//   }
// }