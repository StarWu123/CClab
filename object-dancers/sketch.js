/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new StarDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class StarDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.sq1 = 0;
    this.sq2 = 0;
    
    // add properties for your dancer here:
    this.squareAngle = 0;
    this.secondAngle = 0;
    this.legAngle = 0;
    this.speed = 0;
    this.xOffset = 0;
    this.scale = 0;
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.squareAngle += 0.15
    this.secondAngle += 0.15
    

    if (frameCount % 300 === 0) {
      this.sq1 = 0;
      this.speed = -5; 
    }

    this.speed += 0.1;
    this.sq1 += this.speed;

    if(this.sq1 >= 0){
      this.sq1 = 0;
      this.speed = 0;
    }



   
    this.xOffset = map(sin(frameCount*0.04), -1, 1, -50, 50);
    this.scale = map(sin(frameCount*0.02), -1, 1, 1, 0.8);
  }

    // if (this.sq1 >= 10) {
    //   this.sq1 = 0;
    //   this.speed = +5;
    // }
  //   if(frameCount%90 == 0){
  //     this.sq1 -= 100;
  //   }else{
  //     this.sq1 = 0;
  //   }
  //  }
  

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x + this.xOffset, this.y);
    scale(this.scale);
    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
    translate(0, 40);
    

    //capybara
    noStroke();
    fill(242, 75, 61),
    ellipse(0, 0, 95, 85);
    fill(39, 166, 79);
    ellipse(0, -50, 70, 75);
    circle(20, -75, 20);
    circle(-20, -75, 20);
    fill(200);
    circle(0, -50, 65);
    fill(167, 119, 51);
    circle(0, -50, 60);
    fill(155, 94, 32);
    circle(0, -37, 34)
    

    //arms
    fill(167, 119, 51);
    circle(50, -10, 25);
    circle(-50, -10, 25);
    
    //flowers
    fill(255, 207, 223);
    circle(-10, -5, 8);
    circle(8, 10, 8);
    circle(20, 20, 8);
    circle(-5, 28, 8);
    circle(-15, 16, 8);
    circle(20, -5, 8);

    fill(39, 166, 79);
    ellipse(-16, -6, 5, 10);
    ellipse(9, 16, 8, 4);
    ellipse(25, 20, 5, 10);
    ellipse(-5, 23, 10, 5);
    ellipse(-15, 11, 8, 4);
    ellipse(20, 0, 10, 5);
    
    //legs
    fill(155, 94, 32);
    rect(5, 35, 10, 15, 5);
    rect(-15, 35, 10, 15, 5);

    //face
    stroke(0);
    strokeWeight(1.3);
    line(0, -28, 0, -37);
    line(-4, -28, 4, -28);
    line(-6, -45, -3, -45);
    line(3, -45, 6, -45);

    stroke(0);
    strokeWeight(3.5);
    line(-15, -50, -12, -50);
    line(12, -50, 15, -50);

    
    //shouquan
    push();
    translate(55, this.sq1);

    rotate(this.squareAngle)
    stroke("yellow");
    strokeWeight(0.2);
    fill(214, 73, 34);
    rect(-30, -30, 60, 60, 4);
    rotate(this.secondAngle)
    rect(-30, -30, 60, 60, 4);
    
    ellipse(0, 0, 40, 45);
    ellipse(0, 0, 15, 18);

    pop();
    
    //shouquan2
    push();
    translate(-55, this.sq1);

    rotate(this.squareAngle)
    stroke("yellow");
    strokeWeight(0.2);
    fill(214, 73, 34);
    rect(-30, -30, 60, 60, 4);
    rotate(this.secondAngle)
    rect(-30, -30, 60, 60, 4);

    ellipse(0, 0, 40, 45);
    ellipse(0, 0, 15, 18);

    pop();


    pop();



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/