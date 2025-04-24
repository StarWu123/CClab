let balls = [];
let NUM_OF_BALLS = 50;
MAX_OF_BALLS = 600;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  let b = new Ball(100, 250);
  balls.push(b)

  // for (let i = 0; i < NUM_OF_BALLS; i++) {
  //   balls[i] = new Ball(100, 250);
  // }
  
}

function draw() {
  background(0, 50);

  
  
  // display all balls
  for(let i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].display();
  }

  let newBall = new Ball(250, 0);
    balls.push(new Ball(mouseX, mouseY));

  // text on canvas
  fill(255);
  textSize(20)
  text("number of balls in array: " + balls.length, 20, 40)


  if (balls.length > MAX_OF_BALLS) {
    balls.splice(0, 1); 
  }
}

class Ball{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(1, 3);
    this.ySpeed = random(-1, 1);
    this.size = random(20, 40);
    this.color = color(random(50, 255), random(50, 255), random(50, 255));
  }
  update(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;

  }
  display(){
    push();
    translate(this.x, this.y);
    fill(this.color);
    noStroke();
    circle(0, 0, this.size)
    pop();
  }

}
