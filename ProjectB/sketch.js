let stage = 0;
let question1;
let answerColor;
let a1, b1, c1, d1;
let a2, b2, c2, d2;
let a3, b3, c3, d3;
let a4, b4, c4, d4;
let circleColor, circleColor2, circleColor3, circleColor4;
let squareColor, squareColor2, squareColor3, squareColor4;
let square2Color, square2Color2, square2Color3, square2Color4;
let circle2Color, circle2Color2, circle2Color3, circle2Color4;

let doneButtonColor;
let startButtonColor;

let topFlowerImg1;
let imageTop;
let imageTopIndex;
let imageMid;
let imageSide;
let imageBot;
let imageBotIndex;
let imageBotX;
let imageBotY;
let imageMidIndex;
let imageMidX;
let imageMidY;
let imageSideIndex;
let imageSideX;
let imageSideY;
let imageTopX;
let imageTopY;
let imageBotScale;
let imageMidScale;
let imageSideScale;
let imageTopScale;

let botFlowers = []
let midFlowers = []
let sideFlowers = []
let topFlowers = []


let flowers = [];
let newFlowerAdded = false;
let flowerPos = [];

let song;

// let capture;


function preload(){
  botFlowers.push( loadImage("assets/botFlower1.gif") );
  botFlowers.push( loadImage("assets/botFlower2.gif") );
  botFlowers.push( loadImage("assets/botFlower3.png") );
  botFlowers.push( loadImage("assets/botFlower4.png") );

  midFlowers.push( loadImage("assets/midFlower1.png") );
  midFlowers.push( loadImage("assets/midFlower2.png") );
  midFlowers.push( loadImage("assets/midFlower3.png") );
  midFlowers.push( loadImage("assets/midFlower4.png") );

  sideFlowers.push( loadImage("assets/sideFlower1.png") );
  sideFlowers.push( loadImage("assets/sideFlower2.png") );
  sideFlowers.push( loadImage("assets/sideFlower3.png") );
  sideFlowers.push( loadImage("assets/sideFlower4.png") );

  topFlowers.push( loadImage("assets/topFlower1.gif") );
  topFlowers.push( loadImage("assets/topFlower2.gif") );
  topFlowers.push( loadImage("assets/topFlower3.gif") );
  topFlowers.push( loadImage("assets/topFlower4.gif") );


  song = loadSound("assets/Music.mp3");
}


let fixPosFlower

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  rectMode(CENTER);
  song.loop();
  
  // capture = createCapture(VIDEO);
  // capture.hide();

  flowers = getItem('flowers');
  if(flowers == null){
    flowers = []
  }
  
  console.log(flowers)
  // fixPosFlower = new Flower(0, 0, 1, 0) // xxxxxx no need
}

function mousePressed() {
  if (!song.isPlaying()) {
    song.loop();
  }
}

function draw() {
  background(0);
  // fixPosFlower.displaySolo(width / 2, height / 2) // xxxxxx no need
  
  if (stage == 0) {
    stage0();
    for(let i = 0; i < flowers.length; i ++) {
      push();
      
      translate(flowers[i].gardenX , flowers[i].gardenY);
      // flowers[i].displayGarden(0, 0);
      pop();

      
    }
    newFlowerAdded = false;
  } else if (stage == 1) {
    stage1();
  } else if (stage == 2) {
    stage2();
  } else if (stage == 3) {
    stage3();
  } else if (stage == 4) {
    stage4();
  } else if (stage == 'displayFlower') {
    // image(capture, 0, 0, width, width * capture.height / capture.width);
    // filter(BLUR,5);

    if (newFlowerAdded == false) {
      // displayFlower();
      flowers.push(new Flower(imageTopIndex, imageMidIndex, imageSideIndex, imageBotIndex))
      storeItem('flowers', flowers);
      flowers[flowers.length - 1].gardenX = random(width)
      flowers[flowers.length - 1].gardenY = random(height)
      flowerPos.push([random(width), random(height)]);
      console.log(flowers);
      newFlowerAdded = true;
    }
    flowers[flowers.length - 1].displaySolo(width / 2, height / 2);
    drawDoneButton();
  } 

  let doneColor = dist(mouseX, mouseY, width/2, height * 3.5/4);
  if (doneColor < 25) {
    doneButtonColor = 100
  } else {
    doneButtonColor = 255
  }

  let startColor = dist(mouseX, mouseY, width/2 , height * 3/4);
  if (startColor < 25) {
    startButtonColor = 100
  } else {
    startButtonColor = 255
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
    let mouseDist1 = dist(mouseX, mouseY, 160, 120);
    let mouseDist2 = dist(mouseX, mouseY, 540, 120);
    let mouseDist3 = dist(mouseX, mouseY, 260, 380);
    let mouseDist4 = dist(mouseX, mouseY, 640, 380);
    if (mouseDist1 <= 25) {
      // imageBot = botFlower1 // we dont need anynmmore because the index
      imageBotIndex = 0
      imageBotScale = 0.12
      imageBotX = 2300;
      imageBotY = 2250;

      stage = 2;
    } else if (mouseDist2 <= 25) {
      // imageBot = botFlower2 // we dont need anynmmore because the index
      imageBotIndex = 1
      imageBotScale = 0.10;
      imageBotX = 2700;
      imageBotY = 2700;

      stage = 2;
    }else if (mouseDist3 <= 25) {
      // imageBot = botFlower3 // we dont need anynmmore because the index
      imageBotIndex = 2
      imageBotScale = 0.17;
      imageBotX = 1850;
      imageBotY = 1600;

      stage = 2;
    }else if (mouseDist4 <= 25) {
      // imageBot = botFlower4 
      imageBotIndex = 3
      imageBotScale = 0.10;
      imageBotX = 3010;
      imageBotY = 2300;

      stage = 2;
    }
  }else if (stage == 2) {
    let mouseDist1 = dist(mouseX, mouseY, 380, 80);
    let mouseDist2 = dist(mouseX, mouseY, 150, 260);
    let mouseDist3 = dist(mouseX, mouseY, 650, 240);
    let mouseDist4 = dist(mouseX, mouseY, 420, 420);
    if (mouseDist1 <= 25) {
      imageMidIndex = 0
      imageMidScale = 0.14;
      imageMidX = 2300;
      imageMidY = 940;

      stage = 3;
    } else if (mouseDist2 <= 25) {
      imageMidIndex = 1
      imageMidScale = 0.18;
      imageMidX = 1910;
      imageMidY = 850;

      stage = 3;
    } else if (mouseDist3 <= 25) {
      imageMidIndex = 2
      imageMidScale = 0.18;
      imageMidX = 1910;
      imageMidY = 850;

      stage = 3;
    } else if (mouseDist4 <= 25) {
      imageMidIndex = 3
      imageMidScale = 0.18;
      imageMidX = 1910;
      imageMidY = 850;

      stage = 3;
    }
  } else if (stage == 3) {
    let mouseDist1 = dist(mouseX, mouseY, 200, 150);
    let mouseDist2 = dist(mouseX, mouseY, 600, 150);
    let mouseDist3 = dist(mouseX, mouseY,  200, 350);
    let mouseDist4 = dist(mouseX, mouseY, 600, 350);
    if (mouseDist1 <= 25) {
      imageSideIndex = 0
      imageSideScale = 0.14;
      imageSideX = 2300;
      imageSideY = 940;

      stage = 4;
    } else if (mouseDist2 <= 25) {
      imageSideIndex = 1
      imageSideScale = 0.18;
      imageSideX = 1910;
      imageSideY = 850;

      stage = 4;
    } else if (mouseDist3 <= 25) {
      imageSideIndex = 2
      imageSideScale = 0.18;
      imageSideX = 1910;
      imageSideY = 850;

      stage = 4;
    } else if (mouseDist4 <= 25) {
      imageSideIndex = 3
      imageSideScale = 0.18;
      imageSideX = 1910;
      imageSideY = 850;

      stage = 4;
    }
  } else if (stage == 4) {
    let mouseDist1 = dist(mouseX, mouseY, 260, 80);
    let mouseDist2 = dist(mouseX, mouseY, 640, 130);
    let mouseDist3 = dist(mouseX, mouseY, 560, 400);
    let mouseDist4 = dist(mouseX, mouseY, 170, 370);
    if (mouseDist1 <= 25) {
      imageTopIndex = 0
      imageTopScale = 0.16;
      imageTopX = 1410;
      imageTopY = 300;

      stage = 'displayFlower';
    } else if (mouseDist2 <= 25) {
      imageTopIndex = 1
      imageTopScale = 0.12;
      imageTopX = 2250;
      imageTopY = 250;

      stage = 'displayFlower';
    } else if (mouseDist3 <= 25) {
      imageTopIndex = 2
      imageTopScale = 0.13;
      imageTopX = 2050;
      imageTopY = 350;

      stage = 'displayFlower';
    } else if (mouseDist4 <= 25) {
      imageTopIndex = 3
      imageTopScale = 0.14;
      imageTopX = 1800;
      imageTopY = 250;

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
  push();
  stroke(255);
  strokeWeight(0.8);
  line(0, 250, 800, 250);
  line(0, 310, 800, 310);
  line(0, 375, 800, 375);
  line(0, 437, 800, 437);
  
  drawStartButton();
  pop();
}

function stage1() {
  push();
  let circleColor = dist(mouseX, mouseY, 160, 120);
  if (circleColor < 25) {
    a1 = 100
  } else {
    a1 = 255
  }
  let circleColor2 = dist(mouseX, mouseY, 540, 120);
  if (circleColor2 < 25) {
    b1 = 100
  } else {
    b1 = 255
  }
  let circleColor3 = dist(mouseX, mouseY, 260, 380);
  if (circleColor3 < 25) {
    c1 = 100
  } else {
    c1 = 255
  }
  let circleColor4 = dist(mouseX, mouseY, 640, 380);
  if (circleColor4 < 25) {
    d1 = 100
  } else {
    d1 = 255
  }
  
  fill(255);
  textFont('Courier New');
  textStyle(BOLD);
  textSize(19);
  let s = "A machine asks you to define emotion using something it can measure. What do you give it?";
  textAlign(CENTER, CENTER);
  text(s, width/2, height/2, 300, 200);

  textSize(14);
  textStyle(NORMAL);
  fill(255); // white text
  textAlign(LEFT, CENTER);

  // Circle A
  fill(255, a1);
  circle(160, 120, 50);
  text("A flickering signal that changes every time it’s observed", 210, 50, 380);

  // Circle B
  fill(255, b1);
  circle(540, 120, 50);
  text("A waveform with no beginning, only echoes", 420, 50);

  // Circle C
  fill(255, c1);
  circle(260, 380, 50);
  text("A mineral vein that only glows when touched", 25, 450);

  // Circle D
  fill(255, d1);
  circle(640, 380, 50);
  text("A recursive pattern that breaks itself to grow", 600, 450, 370);
  pop();
}

function stage2() {
  push();
  let squareColor = dist(mouseX, mouseY, 380, 80);
  if (squareColor < 25) {
    a2 = 100
  } else {
    a2 = 255
  }
  let squareColor2 = dist(mouseX, mouseY, 150, 260);
  if (squareColor2 < 25) {
    b2 = 100
  } else {
    b2 = 255
  }
  let squareColor3 = dist(mouseX, mouseY, 650, 240);
  if (squareColor3 < 25) {
    c2 = 100
  } else {
    c2 = 255
  }
  let squareColor4 = dist(mouseX, mouseY, 420, 420);
  if (squareColor4 < 25) {
    d2 = 100
  } else {
    d2 = 255
  }

  fill(255);
  textFont('Courier New');
  textSize(17);
  textStyle(BOLD);
  let t = "You are allowed to bury one feeling so that it may bloom in someone else a thousand years from now. Which do you plant?";
  textAlign(CENTER, CENTER);
  text(t, width/2, height/2, 300, 200);

  // Set text properties
  textSize(14);
  textStyle(NORMAL);
  fill(255); // white text
  textAlign(LEFT, CENTER);

  // Rectangle A
  fill(255, a2);
  rect(380, 80, 50, 50); // width and height are needed for rect
  text("Reverence — the stillness that honors something greater than the self", 180, 80, 300); // y = 80 + 25 (center)

  // Rectangle B
  fill(255, b2);
  rect(150, 260, 50, 50);
  text("Courage — not absence of fear, but the choice to act within it", 210, 350, 300);

  // Rectangle C
  fill(255, c2);
  rect(650, 240, 50, 50);
  text("Tenderness — the quiet strength of letting others in", 640, 140, 300);

  // Rectangle D
  fill(255, d2);
  rect(420, 420, 50, 50);
  text("Remorse — the ache that becomes a vow to do better", 640, 420, 300);
  pop();
}

function stage3() {
  push();
  let square2Color = dist(mouseX, mouseY, 200, 150);
  if (square2Color < 25) {
    a3 = 100
  } else {
    a3 = 255
  }
  let square2Color2 = dist(mouseX, mouseY, 600, 150);
  if (square2Color2 < 25) {
    c3 = 100
  } else {
    c3 = 255
  }
  let square2Color3 = dist(mouseX, mouseY, 200, 350);
  if (square2Color3 < 25) {
    b3 = 100
  } else {
    b3 = 255
  }
  let square2Color4 = dist(mouseX, mouseY, 600, 350);
  if (square2Color4 < 25) {
    d3 = 100
  } else {
    d3 = 255
  }

  fill(255);
  textFont('Courier New');
  textSize(17);
  textStyle(BOLD);
  let r = "You’re told to pack just one item before a long, unpredictable journey. It won’t help you survive, but it will keep you grounded. Which do you take?";
  textAlign(CENTER, CENTER);
  text(r, width/2, height/2, 300, 200);

  // Set text properties
  textSize(14);
  textStyle(NORMAL);
  fill(255); // white text
  textAlign(LEFT, CENTER);

  // Rectangle A
  fill(255, a3);
  rect( 200, 150, 50, 50); // width and height are needed for rect
  text("A heavy wool coat that smells like home", 180, 80, 300); // y = 80 + 25 (center)

  // Rectangle B
  fill(255, b3);
  rect(200, 350, 50, 50);
  text("A pocket-sized notebook filled with unfinished thoughts", 210, 420, 300);

  // Rectangle C
  fill(255, c3);
  rect(600, 150, 50, 50);
  text("A stone worn smooth by your own hands", 640, 80, 300);

  // Rectangle D
  fill(255, d3);
  rect(600, 350, 50, 50);
  text("A photograph of someone you barely remember, but miss anyway", 640, 420, 300);
  pop();
}

function stage4() {
  push();
  let circle2Color = dist(mouseX, mouseY, 260, 80);
  if (circle2Color < 25) {
    a4 = 100
  } else {
    a4 = 255
  }
  let circle2Color2 = dist(mouseX, mouseY, 640, 130);
  if (circle2Color2 < 25) {
    b4 = 100
  } else {
    b4 = 255
  }
  let circle2Color3 = dist(mouseX, mouseY, 560, 400);
  if (circle2Color3 < 25) {
    c4 = 100
  } else {
    c4 = 255
  }
  let circle2Color4 = dist(mouseX, mouseY, 170, 370);
  if (circle2Color4 < 25) {
    d4 = 100
  } else {
    d4 = 255
  }

  fill(255);
  textFont('Courier New');
  textSize(17);
  textStyle(BOLD);
  let a = "You enter a vast hall with four doors, each glowing faintly. You may open only one. Which do you choose?";
  textAlign(CENTER, CENTER);
  text(a, width/2, height/2, 300, 200);

  // Set text properties
  textSize(14);
  textStyle(NORMAL);
  fill(255); // white text
  textAlign(LEFT, CENTER);

  // Circle A
  fill(255, a4);
  circle(260, 80, 50);
  text("A door of black marble, humming with quiet tension", 300, 40);

  // Circle B
  fill(255, b4);
  circle(640, 130, 50);
  text("A door of cracked gold, warm to the touch", 230, 140);

  // Circle C
  fill(255, c4);
  circle(560, 400, 50);
  text("A door of green glass, fogged from within", 200, 450);

  // Circle D
  fill(255, d4);
  circle(170, 370, 50);
  text("A door of silver threads, slightly ajar", 220, 350);
  pop();
}

class Flower {
  constructor(imgTopIdx, imgMidIdx, imgSideIdx, imgBotIdx) {
  this.imgBotIdx = imgBotIdx;
  this.imgMidIdx = imgMidIdx;
  this.imgSideIdx = imgSideIdx;
  this.imgTopIdx = imgTopIdx;
  
  this.gardenX = 0;
  this.gardenY = 0;

  this.x = 0;
  this.y = 0;

  this.imageBotX = imageBotX;
  this.imageBotY = imageBotY;
  this.imageMidX = imageMidX;
  this.imageMidY = imageMidY;
  this.imageSideX = imageSideX;
  this.imageSideY = imageSideY;
  this.imageTopX = imageTopX;
  this.imageTopY = imageTopY;
  // this.imageBotScale = imageBotScale;
  // this.imageMidScale = imageMidScale;
  // this.imageSideScale = imageSideScale;
  // this.imageTopScale = imageTopScale;
}


  displaySolo(x, y){
    this.x = x;
    this.y = y;
    push();
    translate(this.x, this.y);
    scale(1)
    this.displayParts() 
    fill("red")
    circle(0, 0, 5)
    pop()
  }
  displayGarden(){
    push();
    translate(this.gardenX, this.gardenY);
    scale(0.3)
    this.displayParts() 
    fill("red")
    circle(0, 0, 5)
    pop()

  }
  displayParts() {
    //mid
    push();
    if (this.imgMidIdx == 0) {
      //====== change later ======
      scale(0.2);
      translate(-(1920 / 2) - 25, -(1080 / 2) - 100);
      image(midFlowers[0], 0, 0);
    }else if (this.imgMidIdx == 1) {
      scale(0.19);
      translate(-(1920 / 2) - 25, -(1080 / 2) - 100);
      image(midFlowers[1], 0, 0);
    }else if (this.imgMidIdx == 2) {
      scale(0.19);
      translate(-(1920 / 2) - 25, -(1080 / 2) - 100);
      image(midFlowers[2], 0, 0);
    }else if (this.imgMidIdx == 3) {
      scale(0.19);
      translate(-(1920 / 2) - 25, -(1080 / 2) - 100);
      image(midFlowers[3], 0, 0);
    }
    pop();
    //side
    push();
    if (this.imgSideIdx == 0) {
      scale(0.15);
      translate(-(1920 / 2) - 30, -(1080 / 2) - 350);
      image(sideFlowers[0], 0, 0);
    }else if (this.imgSideIdx == 1) {
      scale(0.15);
      translate(-(1920 / 2) - 30, -(1080 / 2) - 350);
      image(sideFlowers[1], 0, 0);
    }else if (this.imgSideIdx == 2) {
      scale(0.15);
      translate(-(1920 / 2) - 30, -(1080 / 2) - 350);
      image(sideFlowers[2], 0, 0);
    }else if (this.imgSideIdx == 3) {
      scale(0.15);
      translate(-(1920 / 2) - 30, -(1080 / 2) - 350);
      image(sideFlowers[3], 0, 0);
    }
    pop();
    //bot
    push();
    if (this.imgBotIdx == 0) {
      scale(0.11);
      translate(-(1920 / 2), -(1080 / 2) + 900);
      image(botFlowers[0], 0, 0);
    } else if (this.imgBotIdx == 1) {
      scale(0.10);
      translate(-(1920 / 2) - 20, -(1080 / 2) + 900);
      image(botFlowers[1], 0, 0);
    }else if (this.imgBotIdx == 2) {
      scale(0.11);
      translate(-(1920 / 2) - 20, -(1080 / 2) + 500);
      image(botFlowers[2], 0, 0);
    }else if (this.imgBotIdx == 3) {
      scale(0.11);
      translate(-(1920 / 3) - 250, -(1080 / 2) + 700);
      image(botFlowers[3], 0, 0); 
    }

    pop();
    //top
    push();
    if (this.imgTopIdx == 0) {
      scale(0.15);
      translate(-(1920 / 2), -(1080 / 2) - 1000);
      image(topFlowers[0], 0, 0);
    } else if (this.imgTopIdx == 1) {
      scale(0.13);
      translate(-(1920 / 2) - 50, -(1080 / 2) - 1000);
      image(topFlowers[1], 0, 0);
    } else if (this.imgTopIdx == 2) {
      scale(0.13);
      translate(-(1920 / 2) - 40, -(1080 / 2) - 1000);
      image(topFlowers[2], 0, 0);
    } else if (this.imgTopIdx == 3) {
      scale(0.15);
      translate(-(1920 / 2) - 50, -(1080 / 2) - 1000);
      image(topFlowers[3], 0, 0);
    }
    pop();
    
  }
}

function drawDoneButton(){
  //doneButton
  push();
  translate(width/2, height * 3.5/4);
  fill(255, doneButtonColor);
  rect(0, 0, 100, 50, 10);
  //text
  fill(0);
  textSize(20);
  textFont('Courier New')
  text("DONE", -23, 8);
  pop();

  console.log('test');

}

function drawStartButton(){
  //doneButton
  push();
  translate(width/2, height * 3/4);
  fill(255, startButtonColor);
  rect(0, 0, 100, 50, 10);
  //text
  fill(0);
  textFont('Courier New')
  textSize(20);
  text("START", -30, 5);
  pop();

}
