let stage = 0;
let question1;
let answerColor;

let topFlowerImg1;
let image1;
// let topChoice, midChoice, botChoice;


// function preload() {
//   image1 = 'filepath'
//   image2 = 'filepath'
// }

function preload(){
  topFlowerImg1 = loadImage("assets/topFlowerGif.gif");
  Flower2 = loadImage("assets/Flower2.webp");
}

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  
}

function draw() {
  background(0);
  
  if (stage == 0) {
    stage0();
  } else if (stage == 1) {
    stage1();
  } else if (stage == 2) {
    stage2();
  } else if (stage == 3) {
    stage3();
  } else if (stage == 'displayFlower') {
    displayFlower()
    //flower = new Flower(topChoice, midChoice, botChoice);
  }
}

function mouseClicked() {
  // change stage based on clicking
  if(stage == 0) {
    let mouseDistStart = dist(mouseX, mouseY, width/2, height * 3/4);
    if (mouseDistStart <= 50) {
      stage = 1;
    }
  } else if (stage == 1) {
    let mouseDist1 = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDist2 = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDist1 <= 25) {
      answerColor = color(255, 0, 0);
      
      stage = 2;
    } else if (mouseDist2 <= 25) {
      answerColor = color(0, 255, 0);
      stage = 2;
    }
  } else if (stage == 2) {
    let mouseDist1 = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDist2 = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDist1 <= 25) {
      answerColor2 = color(255, 0, 0);
      stage = 3;
    } else if (mouseDist2 <= 25) {
      answerColor2 = color(0, 0, 255);
      stage = 3;
    }
  } else if (stage == 3) {
    let mouseDist1 = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDist2 = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDist1 <= 25) {
      // image1 = topFlowerImg1
      // topChoice = 0;
      stage = 'displayFlower';
    } else if (mouseDist2 <= 25) {
      // image1 = Flower2
      // topChoice = 1
      stage = 'displayFlower';
    }
  } else if (stage == 'displayFlower') {
    let mouseDistDone = dist(mouseX, mouseY, width/2, height * 3.5/4);
    if (mouseDistDone <= 50) {
      stage = 0;
   }
  }
}

function stage0() {
  rect(width/2, height * 3/4, 100, 50, 10);
}

function stage1() {
  circle(width / 4, height / 2, 50);
  circle(width * 3 / 4, height / 2, 50);
}

function stage2() {
  rect(width / 4, height / 2, 50);
  rect(width * 3 / 4, height / 2, 50);
}

function stage3() {
  circle(width / 4, height / 2, 50);
  circle(width * 3 / 4, height / 2, 50);
}

function displayFlower() {
  // stage1: clicked left circle => red/
  // clicked right circle => green
  push();
  //flowerBot
  noStroke();
  fill(answerColor)
  rect(width / 2, 300, 100);
  //flowerMid
  fill(answerColor2)
  rect(width / 2, 200, 100);
  //flowerTop
  scale(0.16);
  image (image1, 1600, 150);
  pop();

  //doneButton
  push();
  translate(width/2, height * 3.5/4);
  fill(255);
  rect(0, 0, 100, 50, 10);
  //text
  fill(0);
  textSize(20);
  text("Done", -22, 8);
  pop();
  
}


// let f = new Flower();


// f.head = 2
// f.stem = 3




/*
class Flower
  constructor(imgIndex)
    this.head = 0 //0, 1, 2, 3 -> imgIndex
    this.stem = 0 //0, 2, 3,3 , 4
    this.leaf = 0
    this.age


    display
      push 
      translate()
      scale(1)

      if(this.head == 0)
        push
        translate
        scale() // 
        flower nr 1


        pop
      else if
         ...





         fill("red")
         circle(0, 0, 5)
      pop

*/