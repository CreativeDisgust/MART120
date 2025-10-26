function setup() {
  createCanvas(400, 400);
}
function draw(){
  background (220,220,220);
  stroke(50);
  strokeWeight(2);
  //body
  fill(80,80,150);
  noStroke();
  rect(50,250,300,150);
  //head
  fill(255,210,179);
  ellipse(200,150,200,240);
  //eyes
  fill(50);
  noStroke();
  circle(165,130,12);
  circle(235,130,12);
  //hair-i swear im not balding, i just don't want to make 200 lines
  stroke (40,30,0);
  strokeWeight(10);
  line(170,34,100,250);
  line(180,32,100,250);
  line(220,30,315,250);
  line(225,32,315,250);
  ellipse(200,50,100,25)
  line(235,32,315,250);
  line(240,34,315,250);
    line(250,35,315,250);
      line(260,40,315,250);
        line(270,55,315,250);
  line(160,32,100,250);
  line(150,35,100,250);
  line(140,40,100,250);
  line(130,55,100,250);
  stroke(255,210,179);
  strokeWeight(2);
  line(200,32,200,65);
  //the'stach lol
  stroke(40,30,0);
  strokeWeight(5);
  line(210,195,250,200);
  line(200,195,160,200);
  //mouth
  stroke(50);
  strokeWeight(3);
  line(180,210,225,210);
  line(225,210,230,205);
//nose
noFill();
stroke(50);
triangle(
200,125,
180,165,
220,165
);
//mole
point(240,170,0)
//title
fill(250);
textSize(16);
text("Self portrait",10,30);
//signature
fill(250);
textSize(10);
text("Anthony Aubert",10,390);
}