function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("yellow");
  fill("blue");
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 25, 40);
  }
}