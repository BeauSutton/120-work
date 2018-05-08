
let bubbles=[];

//setting up the canvas and the bubbles being created by mouseclicks
function setup() {
  frameRate(30);
  createCanvas(1300,750);
  let b=new Bubbles(width/2,height/2,15)
  bubbles.push(b);



}
//everytime the mouse is dragged new bubbles appear
function mouseDragged() {
  let r=random(10,50);

    let b= new Bubbles(mouseX,mouseY,r);
    bubbles.push(b);


}
//with everything in the draw function, the bubbles will appear when the mouse
//is dragged
function draw() {
  background(0,0,150);

  push();

		      noCursor();
		      translate(mouseX,mouseY);
		      fill(random(100,255),random(100,200),random(100,250));
		      strokeWeight(0);

		      ellipse(0,0,random(5,10),random(5,20))

		pop();

  for (let i=0; i<bubbles.length; i++) {

  bubbles[i].move();
  bubbles[i].show();

    }
}
// This class dictates how the bubbles will be made
class Bubbles {
  constructor(x,y,r) {
    this.x =x;
    this.y =y;
    this.r=r

    }
//Altering their directions and speed
  move() {
    this.x =this.x+random(-20,100);
    this.y =this.y+random(-90,100);

    }

  show() {

    stroke(random(100,255),random(100,200),random(100,250));
    strokeWeight(random(2,50));
    noFill();
    fill(random(100,150),random(50,255),random(200,255));
    ellipse(this.x,this.y,this.r*2,50);
    }
}
