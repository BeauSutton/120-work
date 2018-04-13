
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

  background(200,100,10);
//putting a warning because it hurt my eyes
push();
textSize(35);
fill(255);
text('only make a few at a time!!!', 10, 30);
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
    this.x =this.x+random(-50,50);
    this.y =this.y+random(-50,50);

    }

  show() {

    stroke(random(100,255),random(100,200),random(100,250));
    strokeWeight(random(2,20));
    noFill();
    fill(random(255),random(255),random(255));
    ellipse(this.x,this.y,this.r*2);
    }

}
