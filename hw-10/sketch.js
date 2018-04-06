let stringArray = ["GEEE", "ArraysRconfusing", ":(", "wish I was better at this",];
let idx = 0;


function setup() {
    createCanvas( windowWidth, windowHeight );
}

//setting vars for colors
let red_val = 0;
let blue_val = 0;
let green_val = 0;

//setting up for a ellipse to follow the cursor
let angle = 0;

let pos_x = 0;
let pos_y = 0;

function draw() {
  background( red_val, green_val, blue_val );
// setting the colors to switch between eachother
    red_val = red_val + 2;
      blue_val = blue_val + .7;
        green_val = green_val + 1.5;

    red_val = red_val % 220;
      blue_val = blue_val % 225;
        green_val = green_val % 210;

        drawDot();
        drawRect();

//trying to make two different dots go across the screen but
//cant seem to get it right
push();
  fill("black");
  ellipse( pos_x, pos_y, 30, 30 );


  pos_x = pos_x + 5;
    pos_y = pos_y + 5;

  pos_x = pos_x % windowWidth;
    pos_y = pos_y % windowHeight;

pop();

push();
  fill("white");
  ellipse( pos_x, pos_y, 20, 40 );


  pos_x = pos_x + 5;
    pos_y = pos_y + 5;

  pos_x = pos_x % windowWidth;
    pos_y = pos_y % windowHeight;

//two simple functions that just draw two shapes and spin them around
function drawDot() {

  fill(random(0,255),random(0,255),200);
  noStroke();
  ellipse(random(windowWidth),random(windowHeight),50,50)
}
function drawRect() {
push();
  fill(random(0,255),random(0,255),200);
  noStroke();
  rect(random(windowWidth),random(windowHeight),50,50)
  translate(random(0,50),random(0,50));
pop();
}


pop();

push();
//main big circle to spin
  translate( windowWidth/2, windowHeight/2);
  rotate(radians(-angle));
  strokeWeight(0);
  fill("rgb(50,90,225)");
    ellipse(0,0,600,575);

pop();

push();
//small circle spinning in the opposite direction
  translate( windowWidth/2, windowHeight/2);
  rotate(radians(angle));
  strokeWeight(0);
  fill("rgb(100,200,50)");
  ellipse(0, 0, 400, 450);

pop();

push();
//even small circle
  translate( windowWidth/2, windowHeight/2);
  rotate(radians(-angle));
  strokeWeight(0);
  fill("rgb(250,50,150)");
  ellipse(0, 0, 300, 350);

pop();

push();
//making the rotaing cursor
      noCursor();
      translate(mouseX,mouseY);
      rotate(radians(angle));
      strokeWeight(0);
      fill("#1E90FF");
      ellipse(0,0,25,30)
// making the cursor spin
  angle = angle + 15;

pop();

push();
  textSize(20);
      noStroke();
      fill('black');
      text("mouseX: " + floor(mouseX), 10, 40 );
      text("mouseY: " + floor(mouseY), 10, 80 );
pop();

push();
//wanted to make a random word "generator" like in one of the examples
     textSize(20);
    fill('black');
    text("Array:"+idx,10,120);
    text("Array_2:"+stringArray[idx],10,160);
    idx =(idx+1)%stringArray.length;
pop();


}
