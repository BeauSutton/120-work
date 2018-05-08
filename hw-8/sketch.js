//preping variables
let rows;
let colums;
let x_space;
let y_space;
//setting up the canvas as well as assigning values to the variables
function setup() {
	createCanvas( windowWidth, 800 );
    frameRate(30);

	  x_space = 29;
	  rows = floor(width/x_space);
	  y_space = 30;
    colums = floor(height/y_space);
}

function draw() {
//creating a background that will randomly change colors
  background(random(5,100),random(50,150), 200);
    noStroke();

		push();

		      noCursor();
		      translate(mouseX,mouseY);
		      fill('white');
		      strokeWeight(0);

		      ellipse(0,0,25,30)

		pop();
	  let x = 2.5;
	  let y = 5;
//creating the conditions for random ellipses to appear on screen
while (y!= 0){
    x = floor(random() * rows);
		y = floor(random() * colums);
//ellipses will randomly switch between colors
		fill(200,random(100,205),random(50,250));
//multiple different ellipses that all have differnt sizes
    ellipse(x*x_space,y*y_space,random(15, 40));
    ellipse(x*x_space,y*y_space,random(20, 90));
    ellipse(x*x_space,y*y_space,random(5, 20));


  }



}
