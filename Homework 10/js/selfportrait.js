//anim-var
//hair-anim
let y_hair, s_hair;
const HAIR_Y_CENTER = 50, LIMIT_Y = 10;
//Eyes-anim
let x_eye_l, s_eye_l_x, x_eye_r, s_eye_r_x;
const EYE_L_X_CENTER = 165, EYE_R_X_CENTER = 235, LIMIT_X_EYE = 5;
//Mole-anim
let y_mole, s_mole_y;
const MOLE_Y_CENTER = 170, LIMIT_Y_MOLE = 3;
//Nose-aim
let x_nose_offset, y_nose_offset, s_nose_x, s_nose_y;
const LIMIT_X_NOSE = 4, LIMIT_Y_NOSE = 4;
// Title Size
let titleSize;
let titleSizeStep = 1;
let titleSizeDirection = 1;
let titleSizeCounter = 0;
const TITLE_BASE_SIZE = 16;
const TITLE_STEPS_COUNT = 5;
//setup
function setup() {
createCanvas(400, 400);

//init-pos
y_hair = HAIR_Y_CENTER;
x_eye_l = EYE_L_X_CENTER;
x_eye_r = EYE_R_X_CENTER;
y_mole = MOLE_Y_CENTER;
x_nose_offset = 0;
y_nose_offset = 0;
titleSize = TITLE_BASE_SIZE;

//init-speed
s_hair = random(1.2, 2.8);
s_eye_l_x = random(0.5, 2.0);
s_eye_r_x = random(0.7, 2.2);
s_mole_y = random(0.3, 1.5);
s_nose_x = random(0.5, 1.8);
s_nose_y = random(0.6, 1.9);
}
//draw
function draw() {
//logic

//Hair-anim
y_hair += s_hair;
  if (y_hair > HAIR_Y_CENTER + LIMIT_Y || y_hair < HAIR_Y_CENTER - LIMIT_Y) {
  s_hair *= -1;
}

// Left Eye-anim
x_eye_l += s_eye_l_x;
  if (x_eye_l > EYE_L_X_CENTER + LIMIT_X_EYE || x_eye_l < EYE_L_X_CENTER - LIMIT_X_EYE) {
  s_eye_l_x *= -1;
}

// Right Eye-anim
x_eye_r += s_eye_r_x;
  if (x_eye_r > EYE_R_X_CENTER + LIMIT_X_EYE || x_eye_r < EYE_R_X_CENTER - LIMIT_X_EYE) {
  s_eye_r_x *= -1;
}

// Mole-anim
y_mole += s_mole_y;
  if (y_mole > MOLE_Y_CENTER + LIMIT_Y_MOLE || y_mole < MOLE_Y_CENTER - LIMIT_Y_MOLE) {
  s_mole_y *= -1;
}

// Nose-anim
x_nose_offset += s_nose_x;
  if (x_nose_offset > LIMIT_X_NOSE || x_nose_offset < -LIMIT_X_NOSE) {
  s_nose_x *= -1;
}
y_nose_offset += s_nose_y;
  if (y_nose_offset > LIMIT_Y_NOSE || y_nose_offset < -LIMIT_Y_NOSE) {
  s_nose_y *= -1;
}

// Title-anim
titleSize += (titleSizeStep * titleSizeDirection);
titleSizeCounter++;
  if (titleSizeCounter >= TITLE_STEPS_COUNT) {
  titleSizeCounter = 0;
  titleSizeDirection *= -1;
 }


//Art
background(220, 220, 220);
stroke(50);
strokeWeight(2);
//body
fill(80, 80, 150);
noStroke();
rect(50, 250, 300, 150);
//head
fill(255, 210, 179);
ellipse(200, 150, 200, 240);
//eyes - ANIMATED
fill(50);
noStroke();
circle(x_eye_l, 130, 12);
circle(x_eye_r, 130, 12);
//hair-i swear im not balding, i just don't want to make 200 lines
stroke(40, 30, 0);
strokeWeight(10);
line(170, 34, 100, 250);
line(180, 32, 100, 250);
line(220, 30, 315, 250);
line(225, 32, 315, 250);
ellipse(200, y_hair, 100, 25)//Y_axis
line(235, 32, 315, 250);
line(240, 34, 315, 250);
line(250, 35, 315, 250);
line(260, 40, 315, 250);
line(270, 55, 315, 250);
line(160, 32, 100, 250);
line(150, 35, 100, 250);
line(140, 40, 100, 250);
line(130, 55, 100, 250);
stroke(255, 210, 179);
strokeWeight(2);
line(200, 32, 200, 65);
//the'stach lol
stroke(40, 30, 0);
strokeWeight(5);
line(210, 195, 250, 200);
line(200, 195, 160, 200);
//mouth
stroke(50);
strokeWeight(3);
line(180, 210, 225, 210);
line(225, 210, 230, 205);
//nose-x/y anim
noFill();
stroke(50);
triangle(
  200 + x_nose_offset, 125 + y_nose_offset,
  180 + x_nose_offset, 165 + y_nose_offset,
  220 + x_nose_offset, 165 + y_nose_offset
);
//mole-y anim
point(240, y_mole, 0)
//title - big/small
fill(250);
textSize(titleSize);
text("Self portrait", 10, 30);
//signature
fill(250);
textSize(10);
text("Anthony Aubert", 10, 390);
}