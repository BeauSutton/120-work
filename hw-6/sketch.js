//setting up the ball object
let ball = {};
ball.size = 100;
ball.color = "#b30000"
ball.pos_x = 0;
ball.pos_y = 0;
let max_pos_mvt = 8;
let angle = 0;

let green_val = 0;
let blue_val = 0;
let red_val = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

//making where the ball will begin in the middle of the canvas
      ball.pos_x = width / 2
      ball.pos_y = height / 2

}

function draw() {
  background(0, green_val, blue_val );
//making the background change colors
  blue_val = round(blue_val + .7);
  green_val = round(green_val + .6);

  blue_val = blue_val % 225;
  green_val = green_val % 210;

//creating the ball and insert the variables
push();
  fill(ball.color);
  ellipse(ball.pos_x, ball.pos_y, ball.size);
pop();
//making it where it will move position randomly
    ball.pos_x += floor(random(-max_pos_mvt, max_pos_mvt + 1));
    ball.pos_y += floor(random(-max_pos_mvt, max_pos_mvt + 1));

push();
//making a ball that would mirror the cursor, rather than follow it
let y = map(mouseY, 0, windowHeight, 600, 0);
let x = map(mouseX, 0, windowWidth, 1250, 0);
  fill('blue');
  ellipse(x, y, 50, 50);

pop();



}
