function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  Petals();
  Face();
}

function Face() {
  colorMode(RGB);
  //face
  fill("yellow");
  circle(300, 300, 200);

  //mouth
  fill("red");
  ellipse(300, 300, 100, 20);
  arc(300, 300, 100, 125, 0, PI);

  //eyes
  fill("black");
  ellipse(325, 250, 18, 30);
  ellipse(275, 250, 18, 30);
}

//petals
function Petals() {
  //colors
  colorMode(HSB);
  this.hue = random(0, 255);
  this.draw = function () {
    fill(this.hue, 255, 255);
    //ellipse(this.x, this.y, 50);
  };

  //petalShape
  let petals = 24;
  let angleStep = 360 / petals;

  push();
  colorMode(HSB);
  translate(300, 300);
  for (let p = 0; p < petals; p++) {
    push();
    fill(random(255), random(255), random(255));
    rotate(p * angleStep);
    bezier(0, 50, -125, -250, 125, -250, 0, 50);
    pop();
  }

  pop();
}
