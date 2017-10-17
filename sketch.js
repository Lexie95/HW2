function setup() {
 createCanvas(500, 500);
  angleMode(DEGREES);
  frameRate(40);
  background(50)
}

function draw() {
  translate(width/1.5,height/2);
  noFill() 
  rotate(frameCount)
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/180));
  if (frameCount == 180) {
  noLoop();

}
}
