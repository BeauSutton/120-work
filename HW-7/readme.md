Beau Sutton, 50

[Live Sketch Link](https://beausutton.github.io/120-work/HW-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

// creating the variables for the ball
let ball = {};

ball.width = 40;

ball.x = 10;

ball.y = 10;

ball.delta_x = 1;

ball.delta_y = 1;

ball.scale_x = 1;

ball.scale_y = 1;

// setting up the code

function setup() {

    createCanvas(windowWidth, 400);

    background(255);

}

// stating that 10 = 1*1 for both ball.x and ball.y

function draw() {

    ball.x += ball.delta_x * ball.scale_x;

    ball.y += ball.delta_y * ball.scale_y;


// setting up if then statement

    if (ball.x >= width || ball.x <= 0) {

// If ball.x is greater than width or ball.x is less than 0

        ball.delta_x = -1 * ball.delta_x;

// ball.delta_x will equal -1 * 1        

    }

    if (ball.y >= height || ball.y <= 0) {

// If ball.y is greater than width or ball.y is less than 0

        ball.delta_y = -1 * ball.delta_y;

// ball.delta_y will equal -1 * 1     

    }

// ball will be white

    fill(255);

    ellipse(ball.x, ball.y, ball.width, ball.width);

}

// when the mouse is pressed the ball speeds up and changes direction

function mousePressed() {

    ball.scale_x = map(mouseX, 0, width, 0.5, 10);

    ball.scale_y = map(mouseY, 0, height, 0.5, 10);

}

## How the ball changes direction

If I were change the values of ball.delta_x or ball.delta_y the ball will sway into different directions

if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
}
if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
}

## How did you alter the sketch?

I altered the ball.width and added ball.height.
Made it where the background will change colors periodically

ball.width = 30;
ball.height = 40;

background( red_val, green_val, blue_val );

  red_val = red_val + 1;
  blue_val = blue_val + 1;
  green_val = green_val + 2;

  red_val = red_val % 225;
  blue_val = blue_val % 225;
  green_val = green_val % 210;
