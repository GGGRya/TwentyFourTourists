//Twenty-four Tourists（二十四旅人）
//Last Update On: DEC 20, 2021
//Gray Guo Rui GGGRya
//In Chinese there is a word that also represents "time(時間)", which is "光陰(light and shadow)". There is a famous quote from Li Bai saying "光陰者，百代之過客也。(Light and shadow(time) is the tourist of generations.)" While in visual art, time is a subject that can be pictured with light and shadow, it can be philosophically considered an object of human nature.
//And 24 periods (solar terms) is a perfect bridge to specify this idea. People usually confuse it as a mysterious derivative of the lunar calendar, but it actually works according to the Sun-Earth relation and general geographical knowledge. It is closer to the natural environment and common lifestyle of everybody. The changing 24 periods are only tourists to our lives. Any cruelest winter will travel by, and we will be welcoming spring. //This is why I named the project about 24 periods as "Twenty-four Tourists".
let minute_24;
let open_24;
let myFont1;
let myFont2;
let myFont;
let charac = [];
let Dist;
let scale;
let dirX;
let dirY;
let col;
let timer1, timer2, timer3;
let up = 3;
let d = false;
let x = 0,
  y = 0;
let daily;
let count = 0;
let today = [];
let tomonth = [];
let time = [];

function preload() {
  minute_24 = loadSound("Minute_24.mp3");
  open_24 = loadSound("Open_24.mp3");
  myFont1 = loadFont("Cinzel-Bold.otf");
  myFont2 = loadFont("CinzelDecorative-Bold.ttf");
  myFont = loadFont("SongT.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textAlign(CENTER, CENTER);
  noStroke();
  getCalendar();
  lines = periods;
  timer1 = second();
  timer2 = minute();
  timer3 = day();
}

function draw() {
  background(0);
  charac = splitTokens(
    Lunar.fromDate(new Date()).toFullString(),
    " " + "[" + "]"
  );
  Dist = dist(width / 2, height / 2, mouseX, mouseY);
  scale = map(Dist, width / 2, 0, 1.3, 0.25);
  dirX = (mouseX / width - 0.5) * 4;
  dirY = (mouseY / height - 0.5) * 4;
  col = color(165 * scale, 120 * scale, 64 * scale);
  push();
  drawEarth();
  pop();
  cover();
  if (up <= 2.5) {
    newDay();
    words();
    push();
    translate(0, 0, height / 2.75);
    drawPeriod();
    pop();
    up = 1;
  }
  push();
  drawCalendar();
  pop();
}
function cover() {
  if (Dist <= 0.3 * height) {
    d = true;
    x = (dirX * height) / 30;
    y = (dirY * height) / 30;
  }
  if (d == true) {
    up = up * 0.999;
    if (up == 2.997) {
      open_24.play();
    }
  }
  if (up > 2.5) {
    push();
    textSize(height / 48);
    textFont(myFont2);
    translate(0, 0, height / up);
    fill(240, cos((up - 3) * 4) * 255);
    text("Twenty-four Tourists", x, y);
    pop();
    push();
    textSize(height / 36);
    textFont(myFont);
    translate(0, 0, height / up);
    fill(0, sin((up + 9) * 7.5) * 245);
    text("二十四 旅人", (-dirX * height) / 30, (-dirY * height) / 30);
    pop();
  }
}

function getCalendar() {
  daily = createGraphics(height, height);
  charac = splitTokens(
    Lunar.fromDate(new Date()).toFullString(),
    " " + "[" + "]"
  );
  daily.fill(255, 215, 172);
  daily.textFont(myFont);
  for (let i = 0; i < charac.length; i++) {
    daily.textSize(random(height / 72, height / 40));
    daily.text(
      charac[i],
      random(0.15 * height, 0.85 * height),
      random(0.15 * height, 0.85 * height)
    );
  }
}

function newDay() {
  if (timer2 != minute() || timer3 != day()) {
    getCalendar();
    timer2 = minute();
    timer3 = day();
    minute_24.play();
  }
}
function words() {
  if (timer1 != second()) {
    if (Dist >= 0.345 * height) {
      lines = [];
      let rg = RiTa.grammar(poem);
      let result = rg.expand();
      let rule = result.split("/");
      for (let i = 0; i < rule.length; i++) {
        lines.push(rule[i]);
      }
      timer1 = second();
    }
  }
}
function drawPeriod() {
  textFont(myFont1);
  let vS = createVector(0, height / 2);
  let vM = createVector(mouseX - width / 2, mouseY - height / 2);
  let angleBetween = vS.angleBetween(vM);
  count = int(map(angleBetween, -PI, PI, 0, 24));
  fill(250);
  textSize(height / 78);
  text(periods[count], 0, -height / 32);
  today = day();
  tomonth = month();
  textSize(height / 88);
  fill(col);
  if (lines[count % 24].includes("&") == true) {
    let mylines = splitTokens(lines[count % 24], "&");
    text(mylines[0], 0, -4 + height / 128);
    text(mylines[1], 0, 12 + height / 128);
  } else {
    text(lines[count % 24], 0, height / 128);
  }

  let an1 = (PI / 12) * [count % 24];
  let an2 = (PI / 6) * (tomonth - 6) + ((today - 22) * PI) / 182.625;
  push();
  rotate(an1);
  fill(250);
  text(date[count % 24], 0, -height / 4.3);
  pop();
  push();
  if (abs(an1 - an2) <= PI / 24) {
    fill(128, 94, 48);
  } else {
    fill(250);
  }
  rotate(an2);
  text(months[tomonth - 1] + " " + today, 0, -height / 4);
  pop();
}
function light() {
  let time = hour();
  let daylight = cos(((time - 12) * PI) / 24) * 8 + 8;
  ambientLight(daylight);
  directionalLight(255, 230, 196, dirX, dirY, -0.4);
}
function drawCalendar() {
  light();
  rotateZ(millis() / 400 / height);
  rotateX(millis() / 400 / width);
  rotateY(millis() / 400 / height);
  texture(daily);
  box(0.8 * height);
}
function drawEarth() {
  light();
  sphere(0.32 * height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
