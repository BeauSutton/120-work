function setup() {
    createCanvas( 800, 750 );
    background( '#00BFFF' );
}
function draw() {
  //making his body using a rectangle
push()
  stroke("#DC143C");
  strokeWeight(4);
  fill("#DC143C");
  rect(330, 375, 150, 300, 20)
pop();

//giving him some arms by tweaking his eyebrows locations and sizes
push();
  rotate( radians(20) );
  stroke("#6A5ACD");
  strokeWeight(4);
  fill("#6A5ACD");
  rect(600, 315, 100, 25);
pop();

push();
  rotate( radians(-15) );
  stroke("#6A5ACD");
  strokeWeight(4);
  fill("#6A5ACD");
  rect(100, 575, 100, 25);
pop();

//making an orange head with no outline
push();
  stroke("orange");
  strokeWeight(20);
  fill("orange");
  ellipse(400, 275, 700, 500);
pop();
//making two black eye sockets
  fill("black");
  ellipse(200, 275, 200, 200);
  fill("black");
  ellipse(600, 275, 200, 200);
//coloring his eyes
  fill("#4682B4");
  ellipse(200, 275, 150, 150);
  fill("#4682B4");
  ellipse(600, 275, 150, 150);
//filling in his pupils with colored ellipses
push();
  stroke("#800000");
  strokeWeight(3);
  fill("#800000");
  ellipse(200, 275, 50, 50);
  fill("#800000");
  ellipse(600, 275, 50, 50);
pop();

//giving him some eyebrows with rect
push();
  rotate( radians(20) );
  stroke("#6A5ACD");
  strokeWeight(4);
  fill("#6A5ACD");
  rect(150, 80, 260, 55);
pop();

push();
  rotate( radians(-10) );
  stroke("#6A5ACD");
  strokeWeight(4);
  fill("#6A5ACD");
  rect(400, 275, 260, 55);
pop();

//giving eybrows more depth using rect
push();
  rotate( radians(20) );
  stroke("#483D8B");
  strokeWeight(4);
  fill("#483D8B");
  rect(160, 85, 238, 45);
pop();

push();
  rotate( radians(-10) );
  stroke("#483D8B");
  strokeWeight(4);
  fill("#483D8B");
  rect(410, 280, 238, 45);
pop();

// giving him a little mouth with an arc
push();
  stroke("black");
  strokeWeight(4);
  fill("black");
  arc(400, 375, 50, 50, 0, PI);
pop();























}
