
function setup() {
	createCanvas(windowWidth,windowHeight);
	strokeWeight(4);
	fill(0,102);
  // put setup code here
}

function draw() {
  // put drawing code here
 if (mouseIsPressed) {
 	fill(0,102);
 	ellipse (mouseX, mouseY, 20, 20)
 }
 else {
 	fill (255,102)
 }

  ellipse(mouseX,mouseY,20,20);
}
function windowResied () {
	resizeCanvas (windowWidth,windowHeight);
}