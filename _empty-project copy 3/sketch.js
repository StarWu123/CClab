// Note: A "uniform" is a global variable within a shader program.

// Create a string with the vertex shader program.
// The vertex shader is called for each vertex.
let vertSrc = `
precision highp float;
uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;
}
`;

// Create a string with the fragment shader program.
// The fragment shader is called for each pixel.
let fragSrc = `
precision mediump float;

varying vec2 vTexCoord;

void main() {
  vec2 uv = vTexCoord;
  vec3 color = vec3(uv.x, uv.y, min(uv.x + uv.y, 1.0));
  gl_FragColor = vec4(color, 1.0);
}
`;

let copied;

function setup() {
  createCanvas(100, 100, WEBGL);

  // Create a p5.Graphics object.
  let pg = createGraphics(25, 25, WEBGL);

  // Create a p5.Shader object.
  let original = pg.createShader(vertSrc, fragSrc);

  // Compile the p5.Shader object.
  pg.shader(original);

  // Copy the original shader to the main canvas.
  copied = original.copyToContext(window);

  // Apply the copied shader to the main canvas.
  shader(copied);

  describe('A rotating cube with a purple-blue gradient on its surface drawn against a gray background.');
}

function draw() {
  background(200);

  // Rotate around the x-, y-, and z-axes.
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);

  // Draw the box.
  box(50);
}