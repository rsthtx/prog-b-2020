const ballCount = 10
let ds = new Array(ballCount);
let xs = new Array(ballCount);
let ys = new Array(ballCount);

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < ballCount; i++) {
    ds[i] = random(0, 50);
  }

  for (let i = 0; i < ballCount; i++) {
    xs[i] = random(0, width);
    ys[i] = random(0, height);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < ballCount; i++) {
    circle(xs[i], ys[i], ds[i])
    xs[i]++
  }
}