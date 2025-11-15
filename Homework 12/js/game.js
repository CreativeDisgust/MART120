// player var
var characterX; 
var characterY; 
var characterSize = 25;

// controls
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// enemy var
var obstacles = [];
var mouseShapeX = -100;
var mouseShapeY = -100;
var mouseShapeSize = 30; 

var hasWon = false;

// fancy colors
let colorPlayer;
let colorPlayerFace;
let colorObstacle1;
let colorObstacle2;
let colorObstacle3;
let colorMouseObstacle;
let colorBorder;
let colorExit;
let colorBackgroundTop;
let colorBackgroundBottom;


//main functions

function setup() {
createCanvas(500, 600);

//apply fancy colors
colorPlayer = color(50, 150, 255); // player color
colorPlayerFace = color(255); // just white
colorObstacle1 = color(255, 80, 80); // danger 1
colorObstacle2 = color(255, 150, 50); // danger 2
colorObstacle3 = color(200, 80, 255); // danger 3
colorMouseObstacle = color(150, 150, 150); // mouse block color
colorBorder = color(10, 10, 20); // border color
colorExit = color(0, 255, 150); // exit color
colorBackgroundTop = color(20, 0, 40); // bg top
colorBackgroundBottom = color(0, 20, 40); // bg bottom

// player & ob func
createPlayer();

createObstacles();
}
function createPlayer() {
characterX = 100;
characterY = 100;
}

function createObstacles() {
// Obstacle 1: red
let obstacle1 = {
x: 200, y: 100,
size: 20,
color: colorObstacle1,
xSpeed: Math.floor(Math.random() * 4) + 1,
ySpeed: Math.floor(Math.random() * 4) + 1
};
obstacles.push(obstacle1);

// Obstacle 2: orange
let obstacle2 = {
x: 300, y: 400,
size: 50,
color: colorObstacle2,
xSpeed: Math.floor(Math.random() * 4) - 2,
ySpeed: Math.floor(Math.random() * 4) - 2
};
obstacles.push(obstacle2);

// Obstacle 3: purple
let obstacle3 = {
x: 50, y: 500,
size: 35,
color: colorObstacle3,
xSpeed: Math.floor(Math.random() * 6) - 3,
ySpeed: 0
};
obstacles.push(obstacle3);
}


function draw() {
drawGradientBackground();

// put up the walls
drawBorder();

// draw the exit door
drawExit();

// haswon func
if (displayWinMessage()) {
return; 
}


drawPlayer();
movePlayer();
checkWinCondition();
moveObstacles(); 
drawObstacles(); 
drawClickedObject();
}

function drawGradientBackground() {
noFill();
for (let i = 0; i < height; i++) {
let inter = map(i, 0, height, 0, 1);
let c = lerpColor(colorBackgroundTop, colorBackgroundBottom, inter);
stroke(c);
line(0, i, width, i);
}
}

function drawPlayer() {
strokeWeight(2);
stroke(colorPlayerFace);
fill(colorPlayer);
ellipse(characterX, characterY, characterSize, characterSize);
}

function moveObstacles() {
for (let i = 0; i < obstacles.length; i++) {
let obs = obstacles[i];

obs.x += obs.xSpeed;
obs.y += obs.ySpeed;
if (obs.x > width + obs.size / 2) {
obs.x = -obs.size / 2;
} else if (obs.x < -obs.size / 2) {
obs.x = width + obs.size / 2;
}
if (obs.y > height + obs.size / 2) {
obs.y = -obs.size / 2;
} else if (obs.y < -obs.size / 2) {
obs.y = height + obs.size / 2;
}
}
}

//movement .
function drawObstacles() {
for (let i = 0; i < obstacles.length; i++) {
let obs = obstacles[i];

stroke(30);
strokeWeight(2);
fill(obs.color);
rect(obs.x - obs.size / 2, obs.y - obs.size / 2, obs.size, obs.size, 2);
}
}

function drawClickedObject() {
fill(colorMouseObstacle);
stroke(30);
strokeWeight(2);
rectMode(CENTER);
rect(mouseShapeX, mouseShapeY, mouseShapeSize, mouseShapeSize, 3);
rectMode(CORNER);
}


function drawBorder() {
var thickness = 10; 
fill(colorBorder);
noStroke();
rect(0, 0, width, thickness);
rect(0, 0, thickness, height);
rect(0, height - thickness, width, thickness);
rect(width - thickness, 0, thickness, height - 50);
}

function drawExit() {
let flicker = random(150, 255);
fill(0, flicker, 150, 100);
noStroke();
rect(width - 10, height - 50, 10, 50);
rect(width - 50, height - 10, 50, 10);

fill(colorExit);
noStroke();
textSize(16);
textAlign(CENTER, CENTER);
text("EXIT", width - 35, height - 25);
}


function displayWinMessage() {
if (hasWon) {
background(0, 0, 0, 150); 
fill(colorExit);
stroke(0);
strokeWeight(2);
textSize(48);
textAlign(CENTER, CENTER);
text("YOU WIN!", width / 2, height / 2 - 20);
textSize(20);
text("Well Done!", width / 2, height / 2 + 30);
return true; 
}
return false; 
}


function movePlayer() {
if (keyIsDown(w)) {
characterY -= 5; 
}
if (keyIsDown(s)) {
characterY += 5; 
}
if (keyIsDown(a)) {
characterX -= 5; 
}
if (keyIsDown(d)) {
characterX += 5; 
}
}

function checkWinCondition() {
if (characterX > width - 10 && characterY > height - 50) {
hasWon = true;
}
}

function mouseClicked() {
if (!hasWon) {
mouseShapeX = mouseX;
mouseShapeY = mouseY;
}
}