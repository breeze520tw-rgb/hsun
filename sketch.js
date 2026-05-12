let bgImg;
let frontImg;
let backImg;
let angleY = 0;

function preload() {
  bgImg = loadImage('000.png');
  frontImg = loadImage('001.png');
  backImg = loadImage('002.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(30);
  image(bgImg, width / 2, height / 2, width, height);

  let centerX = width / 2;
  let centerY = height / 2 + height * 0.08;

  drawGlow(centerX, centerY);

  let cardW = min(360, width * 0.4) * 0.8;
  let cardH = cardW * (frontImg.height / frontImg.width);

  let angle = angleY % 360;
  let scaleX = abs(cos(radians(angle)));
  let currentImg = (angle < 90 || angle > 270) ? frontImg : backImg;

  push();
  translate(centerX, centerY);
  scale(scaleX, 1);
  image(currentImg, 0, 0, cardW, cardH);
  pop();

  angleY += 2.4;
}

function drawGlow(x, y) {
  let ctx = drawingContext;
  let radius = max(width, height) * 0.5;
  let gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, 'rgba(255, 255, 220, 0.2)');
  gradient.addColorStop(0.6, 'rgba(255, 255, 220, 0.08)');
  gradient.addColorStop(1, 'rgba(255, 255, 220, 0)');

  ctx.save();
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
