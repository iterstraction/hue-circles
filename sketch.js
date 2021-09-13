
let cirSize = 500;
let angle;
let step;
let r
let h = 0

function setup() {
  frameRate(120)
  let width = 600;
  let height = 600; 
  angle = 0
  step =  PI / 12;
  r = 37

  createCanvas(width, height);
  colorMode(HSB) 

  translate(width / 2, height / 2);

// big concentric circles going large to small
//   for (let i = 0; i < 12; i++){
//     ellipse(0, 0, cirSize);
//     cirSize = cirSize - 50; 
//   }
}

function draw() {

  translate(width / 2, height / 2);

  for (let j = 0; j < 225; j = j + 25) {
    let i = (j % 10) ? 1 : -1;
    var x = (j + r) * i * sin(angle * i);
    var y = (j + r) * i * cos(angle * i);
    stroke(25)    
    fill ((h+j) % 360, 75, 75, .125);
    ellipse(x, y, 25);
  }

  angle = angle + step * .1;
  h = (h + 1) % 360
}

