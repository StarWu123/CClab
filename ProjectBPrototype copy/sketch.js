let stage = 0;
let question1;
let answerColor;

let topFlowerImg1;
let imageTop;
let imageMid;
let imageBot;
let imageBotX;
let imageBotY;
let imageMidX;
let imageMidY;
let imageTopX;
let imageTopY;
let imageBotScale;
let imageMidScale;
let imageTopScale;


let flowers = [];


function preload(){

  botFlower1 = loadImage("assets/botFlower1.png");
  botFlower2 = loadImage("assets/botFlower2.png");
  botFlower3 = loadImage("assets/botFlower3.webp");
  botFlower4 = loadImage("assets/botFlower4.webp");

  midFlower1 = loadImage("assets/midFlower1.png");
  midFlower2 = loadImage("assets/midFlower2.png");
  midFlower3 = loadImage("assets/midFlower3.png");
  midFlower4 = loadImage("assets/midFlower4.png");

  topFlower1 = loadImage("assets/topFlower1.gif");
  topFlower2 = loadImage("assets/topFlower2.webp");
  topFlower3 = loadImage("assets/topFlower3.png");
  topFlower4 = loadImage("assets/topFlower4.webp");
}

function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  
}

function draw() {
  background(0);
  
  if (stage == 0) {
    stage0();
    // for(let i = 0; i < flowers.length; i ++) {
    //   flowers[i].display(x, y);
    // }
  } else if (stage == 1) {
    stage1();
  } else if (stage == 2) {
    stage2();
  } else if (stage == 3) {
    stage3();
  } else if (stage == 'displayFlower') {
    // displayFlower();
    flowers.push(new Flower(imageTop, imageMid, imageBot))
    flowers[flowers.length - 1].display(width / 2, height / 2);
    drawButton();
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
    let mouseDist3 = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDist4 = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDist1 <= 25) {
      imageBot = botFlower1
      imageBotScale = 0.14
      imageBotX = 2000;
      imageBotY = 1700;

      stage = 2;
    } else if (mouseDist2 <= 25) {
      imageBot = botFlower2
      imageBotScale = 0.25;
      imageBotX = 1310;
      imageBotY = 1100;

      stage = 2;
    }
    // }else if (mouseDist3 <= 25) {
    //   imageBot = 
    //   stage = 2;
    // }else if (mouseDist4 <= 25) {
    //   imageBot = 
    //   stage = 2;
    // }
  } else if (stage == 2) {
    let mouseDist1 = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDist2 = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDist1 <= 25) {
      imageMid = midFlower1
      imageMidScale = 0.14;
      imageMidX = 2300;
      imageMidY = 940;

      stage = 3;
    } else if (mouseDist2 <= 25) {
      imageMid = midFlower2
      imageMidScale = 0.18;
      imageMidX = 1910;
      imageMidY = 850;

      stage = 3;
    }
  } else if (stage == 3) {
    let mouseDist1 = dist(mouseX, mouseY, width / 4, height / 2);
    let mouseDist2 = dist(mouseX, mouseY, width * 3 / 4, height / 2);
    if (mouseDist1 <= 25) {
      imageTop = topFlower1
      imageTopScale = 0.16;
      imageTopX = 1410;
      imageTopY = 300;

      stage = 'displayFlower';
    } else if (mouseDist2 <= 25) {
      imageTop = topFlower2
      imageTopScale = 0.16;
      imageTopX = 1910;
      imageTopY = 500;

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
  circle(width * 3 / 4, height / 2, 50);
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

class Flower {
  constructor(imgTop, imgMid, imgBot) {
    this.imgTop = imgTop;
    this.imgMid = imgMid;
    this.imgBot = imgBot;
    this.x = 0;
    this.y = 0;

    this.imageBotX = imageBotX;
    this.imageBotY = imageBotY;
    this.imageMidX = imageMidX;
    this.imageMidY = imageMidY;
    this.imageTopX = imageTopX;
    this.imageTopY = imageTopY;
    this.imageBotScale = imageBotScale;
    this.imageMidScale = imageMidScale;
    this.imageTopScale = imageTopScale;
  }

  display() {
    // console.log(imageTop)
    push();
    translate(this.x, this.y);

    //flowerBot
    push();
    scale(imageBotScale);
    image (imageBot, imageBotX, imageBotY);
    pop();

    //flowerMid
    push();
    scale(imageMidScale);
    image (imageMid, imageMidX, imageMidY);
    pop();
    
    //flowerTop
    push();
    scale(imageTopScale);
    image (imageTop, imageTopX, imageTopY);
    pop();

    pop();
    
  }
}

function drawButton(){
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
