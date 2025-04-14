// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 30; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 500; // Decide the maximum number of particles.

let particles = [];
let count = 0

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
  background(255);
}

function draw() {
  background(0, 50);

  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
    if (p.y > height) {
      particles.splice(i, 1);
    }
  }

  // text(particles.length, 20, 20);

  let newParticle = new Particle(random(width), 0);
    particles.push(new Particle(random(width), 0));

  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
  
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 6;

    this.speedX = random(0, 1);
    this.speedY = random(4, 6)
    this.color = color(random(50,255));
  
  }
  // methods (functions): particle's behaviors
  update() {
    // (add)
    this.x+=this.speedX;
    this.y+=this.speedY;

    this.speedX +=.08
   
  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.color);
    rect(0, 0, this.dia,6);
    
    pop();
  }
}

function mousePressed() {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
 }
