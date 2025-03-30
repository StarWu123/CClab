// let greetings1 = "hi"
// let greetings2 = "哈喽"
let greetings = ["hi", "哈喽", "Bonjour"];


function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(200, 50, 50);

  // text(greetings[0], width/2, height/2);
  // text(greetings[1], width/2, height/2 + 12);
  // text(greetings[2], width/2, height/2 + 24);

  for (let i = 0; 1 < 3, i++) {
  let greetings = greetings[i];
  let y = height/2 + i * 12;
  text(greetings, width/2, y);
  }

}