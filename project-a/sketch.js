let circleX = 400;
let circleY = 490;
let circleR = 90;

let creatureColor;

let sinInput = 0; 
let speed = 0.03;

let x = 0;
let q = 0;
let w = 0;

let rectX = 0;
let bedX = 0;
let rectX2 = 0;
let personX = 0;
let headX;

let timeOfDay;
let bgColor;

let circleColor;
let circleSize;

let doorX, door2X = (0,0);

let bedFrame1, bedFrame2 = (0,0);

let sheet = 0;

let dream = false;
let dreamX;
let dreamY = 350;
let dreamR = 20;

let appear = false;

let time = 0; 

let changeColor = false;

let noiseValue
let noiseValueY

let x0;
let y0;
let cx;

let dreamCol;
let good = false;
let bad = false;
let goodCol
let badCol

function setup() {
  createCanvas(800, 500);
  
  let canvas = createCanvas(800, 500);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  
  refreshroom();
  
} 

function refreshroom(){
 
  creatureColor = color(0)
  //painting color & circle size
  bgColor = color(random(0, 255), random(60,110), random(70,110));
  circleColor = color(random(0,255),random(0,255),random(0,255));
  circleSize = random(20,60);
  sheetColor =  color(random(0,255), random(0,255), random(0,255));
  goodCol = color(random(255),random(255),random(255))
  badCol = color(random(255))
  
  // bed position
  if(random(0,100)<50){
    bedX = 400;
    bedFrame1 = 660;
    bedFrame2 = 360;
    sheet = 400;
    personX = 600;
    headX = 640;
  }else{
    bedX = 140;
    bedFrame1 = 100;
    bedFrame2 = 400;
    sheet = 200;
    personX = 200;
    headX = 160;
  }
  
  //door
  if(random(0,100)<50){
    doorX = 0;
    door2X = 120;
  }else{
    doorX = 700;
    door2X = 720;
  }
  
  //dream
  dreamX = headX;
  
  //nightstand
  if(random(0,100)<50){
    rectX = 0;
  }else{
    rectX = 700;
  }

  //closet
  if(random(0,100)<50){
    rectX2 = 0;
  }else{
    rectX2 = 700;
  }
}

function draw() {
  let timeOfDay = sin(frameCount*0.003);
  let bc = map(timeOfDay, -1, 1, 60, 235);
  // background(255);
  noStroke();
  
  //floor
  let floorR = map(timeOfDay, -1, 1, 180,255);
  let floorG = map(timeOfDay, -1, 1,168,241);
  let floorB = map(timeOfDay, -1, 1, 145,206);
  let floorColor = color(floorR,floorG,floorB);
  fill(floorColor);
  rect(-10, 330, 900, 200);
  
  drawRoom(timeOfDay,bc);
  
  //person on bed
  if(appear){
    fill(0);
    circle(headX, 350, 35);
    circle(personX, 350, 47);  
  }
  
  fill(158, 110, 40);
  rect(bedFrame1, 250, 40, 200);
  rect(bedFrame2, 300, 40, 150);
  fill(136, 94, 38);
  rect(bedFrame1, 250, 40, 50);
  rect(bedFrame2, 300, 40, 60); 
  fill(sheetColor);  
  rect(sheet, 320, 200, 100);
  
  noiseValue = noise(frameCount*0.03);
  x0 = map(noiseValue, 0, 1, 7.5, 50)+20;
  
  noiseValueY = noise(frameCount*0.01);
  y0 = map(noiseValueY, 0, 1, 7.5, 50)+20;
  
  sinInput = sinInput + speed;
  let sinValue = sin(sinInput); 
 
  let circleSSize = map(sinValue, -1, 1, 0.8,1.3);
  
  if(headX == 160){ // left
      cx = x0+20
      drawCreature(cx, y0+20, circleSSize, creatureColor);
  }else{ // right
      cx = width-x0-20
      drawCreature(cx, y0+20, circleSSize, creatureColor);
  }
  
  if (dream == true) {
    if(headX == 160){
      dreamX -= 0.15;
    }else{
      dreamX += 0.15;
    }  
  
  let d = dist(dreamX, dreamY, cx,y0+20);
    
  if (good == true){
    dreamCol = goodCol
  }else if (bad == true){
    dreamCol = badCol
  }else{
    dreamCol = color(255)
  }
    
  fill(dreamCol); // bubble color
  circle(dreamX, dreamY, dreamR);
  dreamY -= 0.5;
  dreamR += 0.04;
    
  if (d < dreamR+20) { 
    dream = false; 
    changeColor = true;
    time = 0; 
    }
  }

  if (changeColor) {
    time++;
    if (time <= 300) { 
      creatureColor = dreamCol
      
    } else {
      
      creatureColor = color(0)
      changeColor = false; 
      good = false;
      bad = false;
    }
  }
  
  generatebutton();
  let d = dist(mouseX, mouseY, circleX, circleY);
  
}

function drawCreature(transx, transy, circleSSize, c){
  
  //creature
  push();
  translate(transx, transy);
  scale(circleSSize);
  
  noStroke();
  fill(c);
  
  ellipse(0-5, 0-20, 4, 20,);
  ellipse(0+5, 0-20, 4, 20,);
  ellipse(0-8, 0-16, 4, 10,);
  ellipse(0+8, 0-16, 4, 10,);
  circle(0, 0, 36);
  
  fill(255);
  circle(0+5, 0-8, 3);
  circle(0-5, 0-8, 3);
   
  pop();
  
}

function drawRoom(t,bc){
  
  let windowR = map(t, -1, 1, 36,145);
  let windowG = map(t, -1, 1,42,211);
  let windowB = map(t, -1, 1, 65,225);
  let windowColor = color(windowR,windowG,windowB);

  circle(q,w, 50);
  
  //window
  fill(windowColor);
  rect(280, 80, 250, 150); 
  
  // sun
  let sunY = -sin(frameCount*0.003) * 60 +50;
  fill(250, 200, 50);
  noStroke();
  circle(470, 200+sunY, 40);
  
  //moon
  let moonY = sin(frameCount*0.003) * 60+50;
  fill(255, 230, 50);
  noStroke();
  circle(350, 200+moonY, 40);
  let moon2Y = sin(frameCount*0.003) * 60+50;
  fill(windowColor);
  noStroke();
  circle(370, 200+moon2Y, 40);
  
  if(moonY < 50){
    appear = true;
  }
  
  if(moonY > 80){
    appear = false;
  }
  
  // background(bc);
  fill(bc);
  rect(0, 0, 900, 70);
  rect(0, 240, 900, 70);
  rect(0, 70, 270, 170);
  rect(540, 70, 270, 170);
  
  fill(231, 210, 167);
  rect(-10, 310, 900, 20);
  
  //windowframe
  fill(150);
  rect(270, 70, 10, 170);
  rect(530, 70, 10, 170);
  rect(270, 70, 260, 10);
  rect(270, 230, 260, 10);
  
  //plant
  fill(150, 75, 0); 
  rect(165, 250, 70, 70, 20);
  fill(100, 50, 0);
  ellipse(200, 260, 60, 20); 
  stroke(0, 100, 0);
  strokeWeight(4);
  line(180, 260, 180, 200);
  line(200, 260, 200, 190);
  line(220, 260, 220, 200);
  fill(0, 150, 0);
  noStroke();
  ellipse(175, 200, 30, 15);
  ellipse(185, 190, 30, 15);
  ellipse(195, 180, 30, 15);
  ellipse(215, 195, 30, 15);
  ellipse(225, 210, 30, 15);
  
  //carpet
  let carpetR = map(t, -1, 1, 207,255);
  let carpetG = map(t, -1, 1,203,250);
  let carpetB = map(t, -1, 1, 191,236);
  let carpetColor = color(carpetR,carpetG,carpetB);
  fill(carpetColor);
  rect(200, 380, 400, 100);
  
   // painting
  fill(bgColor);
  rect(600,20, 90, 120);
  
  if(random(0,100)<50){
    fill(circleColor);
    circle(645, 50, 20);
    circle(645, 80, circleSize);
  }else{
    fill(circleColor);
    circle(645, 50, 20);
    circle(645, 80, circleSize);
  }
  
  //ceiling light
  fill(0);
  rect(396, 0, 5, 40);
  fill(247, 233, 154);
  quad(385, 25, 415, 25, 430, 50, 370, 50);
  
  //shelf
  fill(100, 65, 25);
  rect(580, 220, 150, 15);
  fill(115, 140, 61);
  rect(590, 190, 20, 40);
  fill(51, 64, 132);
  rect(610, 180, 20, 50);
  fill(77, 187, 193);
  rect(630, 200, 20, 30);
  fill(216, 93, 199);
  rect(640, 185, 20, 45);
  fill(108, 67, 153);
  rect(660, 175, 20, 55);
  
    //door
  fill(83, 51, 7);
  rect(doorX, 110, 130, 220);
  fill(250, 200, 50);
  circle(door2X, 220, 10);
  
  //closet
  fill(100, 65, 25);
  rect(rectX,200, 100, 270);
  fill(100, 70, 30);
  rect(rectX,200, 100, 60);
  
  //nightstand
  fill(100, 65, 25);
  rect(rectX2,400, 100, 120);
  fill(120, 70, 30);
  rect(rectX2,350, 100, 60);
  
   // sheet
  fill(250);
  rect(bedX, 320, 260, 100);
  fill(220);
  rect(bedX, 380, 260, 40);
  
  //security camera
  push();
  translate(300,0);
  fill("red");
  circle(0+25, 0+8, 40);
  fill(155);
  rect(0, 0, 50,15);
  pop();
}

function generatebutton(){
  // generate room butoon
  fill(100);
  circle(400, 490, 100);
  fill("red");
  circle(circleX, circleY, circleR); // defalult: 400, 490, 90
  fill(255);
  textSize(16);
  stroke(255);
  strokeWeight(1.2);
  text("Generate", 368, 475);
  text("Room", 378, 490);
  
  // good dream
  let alpha = map(sin(frameCount*0.003),-1,1,0,1)
  let goodCol1 = color(0,0,255)
  let goodCol2 = color(204, 238, 255)
  fill(lerpColor(goodCol1, goodCol2,alpha))
  circle(circleX-170, circleY+5, circleR-10);
  fill(255);
  textSize(16);
  stroke(255);
  strokeWeight(1.2);
  text("Good", 210, 476);
  text("Dream", 205, 496);
  
  // bad dream
  let badCol1 = color(0)
  let badCol2 = color(180)
  fill(lerpColor(badCol1, badCol2,alpha))
  circle(circleX+170, circleY+5, circleR-10);
  fill(255);
  textSize(16);
  stroke(255);
  strokeWeight(1.2);
  text("Bad", 555, 476);
  text("Dream", 545, 495);
}

function mousePressed(){
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleR){
    refreshroom();
  } else if (appear) {
    dream = true;
    dreamX = headX; 
    dreamY = 350;
    dreamR = 20;
    time = 0;
    changeColor = false; 
  }
  
  let d1 = dist(mouseX, mouseY, circleX-170, circleY+5);
  if (d1 < circleR-10 && bad != true){
    // good dream
    good = true
  }
  
  let d2 = dist(mouseX, mouseY, circleX+170, circleY+5);
  if (d2 < circleR-10 && good != true){
    // bad dream
    bad = true
  }
}