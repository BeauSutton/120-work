
let balls=[];
//number of balls
const numOfBalls=90;

function setup() {
  createCanvas(600, 600);
      frameRate(60);
    let init_x=60;
      let init_y=60;
        for (let i=0; i<numOfBalls; i++) {
            balls.push(new Ball(init_x, init_y));

      init_x+=100;
          if (init_x > width) {
              init_x=60;
                  init_y+=100;
        }
    }
}

function draw() {
  background('rgb(255, 55, 0)');

    for (let i=0; i <balls.length; i++) {

        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}
//setting up the aspects of the balls
class Ball {
    constructor(x, y, size) {
        this.color='white';
          this.size=random(10, 25);
            this.rad=this.size/2;
              this.posX=x;
                this.posY=y;
                  this.deltaX=random(-5, 5);
                    this.deltaY=random(-5, 5);
    }
//creating the balls
display() {
  push();
      noStroke();
      fill(this.color);
      translate(this.posX, this.posY);
      ellipse(0, 0, this.size);
  pop();
    }

move() {
    this.posX+=this.deltaX;
        this.posY+=this.deltaY;
    }

edgeCheck() {
    if (this.posX+this.rad>=width || this.posX-this.rad<=0) {
        this.deltaX*=-1;
            this.color='rgb(0, 0, 158)';
        }
    if (this.posY+this.rad>=height || this.posY-this.rad<=0) {
        this.deltaY*=-1;
            this.color='rgb(0, 166, 255)';
        }
    }

ballCheck(otherBalls, myId) {
    for (let n=0; n<otherBalls.length; n++) {
        if (n!=myId) {
            let d=dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR=this.rad+otherBalls[n].rad;
        if (d<=combinedR) {
            this.deltaX*=-1;
                this.deltaY*=-1;
        if( this.color=='rgb(0, 128, 0)') {
            this.color='rgb(0, 166, 255)';
        } else {
            this.color='rgb(255, 200, 64)';
                    }
                }
            }
        }
    }
}
