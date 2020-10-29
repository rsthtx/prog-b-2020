function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let x = mouseX;
  let y = mouseY;

  let circleSize = 50

  let xIsLarge = x > 200
  let yIsLarge = y > 200

  // let xIsSmall = ! xIsLarge

  if (xIsLarge) {
    circleSize = circleSize * 2
  }

  if (xIsLarge || !yIsLarge) {
    fill("red");
  } else {
    fill("white");
  }

  circle(x, y, circleSize)
}