let stage = 0;
let question1;
let answerColor;


// function preload() {
//   image1 = 'filepath'
//   image2 = 'filepath'
// }
function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
}

function draw() {
  background(10);
  
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
  }
}

function mouseClicked() {
  // change stage based on clicking
  if(stage == 0) {
    let mouseDist = dist(mouseX, mouseY, width/2, height * 3/4);
    if (mouseDist <= 50) {
      stage = 1;
    }
  } else if (stage == 1) {
    let mouseDistLeft = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDistRight = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDistLeft <= 25) {
      answerColor = color(255, 0, 0);
      stage = 2;
    } else if (mouseDistRight <= 25) {
      answerColor = color(0, 255, 0);
      stage = 2;
    }
  } else if (stage == 2) {
    let mouseDistLeft = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDistRight = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDistLeft <= 25) {
      answerColor2 = color(255, 0, 0);
      stage = 3;
    } else if (mouseDistRight <= 25) {
      answerColor2 = color(0, 0, 255);
      stage = 3;
    }
  } else if (stage == 3) {
    let mouseDistLeft = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDistRight = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDistLeft <= 25) {
      answerColor3 = color(0, 255, 0);
      stage = 'displayFlower';
    } else if (mouseDistRight <= 25) {
      answerColor3 = color(255, 255, 0);
      stage = 'displayFlower';
    }
  } else if (stage == 'displayFlower') {
    let mouseDist = dist(mouseX, mouseY, width/2, height * 3.5/4);
    if (mouseDist <= 50) {
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
  fill(answerColor3)
  rect(width / 2, 100, 100);
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