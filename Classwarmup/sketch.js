// let eggcircle1;
// let eggcircle2;
let basket = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // eggcircle1 = new Eggcircle(100, 100);
  // eggcircle2 = new Eggcircle(200, 200);


  // let egg = new Eggcircle(100, 100);
  // basket.push(Eggcircle);

  for(let i = 0; i < 100; i++){
    let egg = new Eggcircle(100, 100);
    basket.push(egg);
  }
}

function draw() {
  background(200, 30, 90);


  
  // eggcircle1.update();
  // eggcircle1.display();

  // eggcircle2.update();
  // eggcircle2.display();
for(let i = 0; i < basket.length; i++){
  basket[i].update();
  basket[i].display();
}
}

class Eggcircle{
   constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.diaX = 80;
    this.diaY = 130;
    this.speedX = random(-2,2);
    this.speedY = random(-2,2);
    this.scaleFactor = random(0.3, 1);
   }

   update(){
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0 || this.x > width){
      this.speedX = -this.speedX
    }
    if(this.y < 0 || this.y > height){
      this.speedY = -this.speedY
    }
   }  

   display(){
   push();
   translate(this.x, this.y);
   scale(this.scaleFactor);
   noStroke();
  //  circle(0, 0, this.dia);
   arc(0, 0, this.diaX, this.diaY, PI, 2*PI);
  //  ellipse(0, 0, this.diaX, this.diaX)
   arc(0, 0, this.diaX, this.diaX, 0, PI);
   pop();
   }
}