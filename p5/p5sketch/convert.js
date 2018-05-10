function setup() {
	createCanvas(windowWidth,windowHeight);
  resizeCanvas(windowWidth, windowHeight);
	background (0,0,0)
  // put setup code here
}

function draw() {
  // put drawing code here
  	if (mouseIsPressed) {
    background(0, 0, 0);
  } 
//if the the mouse pressed is, our background is repainted black, erasing our sketch
  translate(width / 5, height / 5);
  translate(p5.Vector.fromAngle(millis() / 2000, 750));
  stroke(0, 255, 0,25);
  fill(0, 200, 255,25);
  //this defines the color and outlne of our triangles
  triangle(mouseY, mouseX, 300, 50,500,50);
  //and this defines our position of the three points of the triangle, with one following our mouse
  stroke(150, 0, 0,50);
  fill(255, 0, 0,25);
  triangle(mouseX, mouseY, 10, 100,10,300);
  stroke(0, 0, 175,75);
  fill(0, 200, 0,25);
  triangle(mouseX, mouseY, 890, 100,890,300);
  stroke(100, 255, 0,50);
  fill(50, 0, 100,25);
  triangle(mouseY, mouseX, 300, 890,500,890);
   }