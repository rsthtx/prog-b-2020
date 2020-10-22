function setup() {
  createCanvas(400, 400);
}

let x = 0

function draw() {
  background(220);
  fill("red")
  x = mouseX
  circle(x,150,150)
}