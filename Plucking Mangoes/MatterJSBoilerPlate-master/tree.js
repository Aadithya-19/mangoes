class tree
{
	constructor(x,y, height, width)
	{
		this.x=x;
        this.y=y;
        this.height = height;
        this.width = width;
        this.image = loadImage("tree.png");
    }
    display(){
        // var angle = this.body.angle;
        push();
        translate(this.x, this.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
}
//     constructor(x,y,height,angle){
//         super(x,y,20,height,angle);
//         this.image = loadImage("sprites/wood2.png");
//         Matter.Body.setAngle(this.body, angle);
//     }
// }
      