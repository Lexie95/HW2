function setup() {
 createCanvas(500, 500);
  angleMode(DEGREES);
  
  // How many times draw() runs every second?
  frameRate(40);
  background(50)
}

function draw() {
  translate(width/1.5,height/2);

  // Every frame, it makes a rotation of 3 degrees
  noFill()
  
  rotate(frameCount)
   // lerpColor blends two colors to find a third color somewhere between them.
  // lerpColor(col1,col2,amount)
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/180));
  line(0,0,0,200*sin(frameCount));

  
    // Stops the draw function if a certain condition avaluates true
    if (frameCount == 180) {
    noLoop();

}
}
