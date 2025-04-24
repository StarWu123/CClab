let paperImg;
let fishImg;
let imgW, imgH;
let worldWidth = 1500;
let worldHeight = 1500;
let worldX = 0;
let worldY = 0;

let particles = [];
let mainCharacter;

let numParticles = 50;

function preload(){
  paperImg = loadImage("assets/nyan-cat.gif");
  fishImg = loadImage("assets/alexFish.png");
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  for(let i = 0; i < numParticles; i++){
    particles.push(new Particle());
  }
  
  mainCharacter = new Fish();
  // imgW = paperImg.width;
  // imgH = paperImg.height;
}

function draw() {
  background(240);
  
  push();
  translate(worldX, worldY);

  image(paperImg, 0, 0, worldWidth, worldHeight);

  for(let i = 0; i < numParticles; i++){
    particles[i].update();
    particles[i].display();
  }
  
  
  mainCharacter.update();
  mainCharacter.display();
  

  pop();
  
  let nagivationSpeed = 4;
  if(keyIsPressed == true) {
    if(key == "a"){
      // worldX += nagivationSpeed;
      mainCharacter.moveLeft();
    }else if (key == "d"){
      // worldX -= nagivationSpeed;
      mainCharacter.moveRight();
    }else if (key == "w"){
      // worldY += nagivationSpeed;
      mainCharacter.moveUp();
    }else if (key == "s"){
      // worldY -= nagivationSpeed;
      mainCharacter.moveDown();
    }
    }
  }

class Particle{
  constructor(){
    this.x = random(0, worldWidth);
    this.y = random(0, worldHeight);
    this.speedX = random(-2, 2);
    this.dia = 20
  }
  update(){
    this.x += this.speedX;

    // bounce
    // if(this.x > width-this.dia/2 || this.x < this.dia/2){
    if(this.x > worldWidth-this.dia/2 || this.x < this.dia/2){
      this.speedX = -this.speedX;
    }
  }
  display(){
    push();
    translate(this.x, this.y);

    circle(0, 0, this.dia);

    pop();
  }
}

class Fish{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.speed = 4;
    this.angle = 0;
  }
  update(){

  }
  display(){
    push();
    translate(this.x,this.y);
    scale(1);
    rotate(radians(this.angle))

    image(fishImg, -74, -60);

    fill("red");
    circle(0, 0, 5);
    pop()
  }
  moveRight(){
    this.x += this.speed;
    worldX -= this.speed;
    this.angle = 90;
  }
  moveLeft(){
    this.x -= this.speed;
    worldX += this.speed;
    this.angle = 270;
  }
  moveUp(){
    this.y -= this.speed;
    worldY += this.speed;
    this.angle = 360;
  }
  moveDown(){
    this.y += this.speed;
    worldY -= this.speed;
    this.angle = 180;
  }
}

