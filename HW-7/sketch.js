

let ball = {};
ball.width = 30;
ball.height = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

let red_val = 0;
let blue_val = 0;
let green_val = 0;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}


function draw() {
  background( red_val, green_val, blue_val );

    red_val = red_val + 1;
      blue_val = blue_val + 1;
        green_val = green_val + 2;

    red_val = red_val % 225;
      blue_val = blue_val % 225;
        green_val = green_val % 210;

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.height);


}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 7, 10);
    ball.scale_y = map(mouseY, 0, height, 5, 10);



}
