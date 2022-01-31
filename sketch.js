var s1, s1I, s3;
var s2, s2I, s4;
var s5, s5I, s6;
var s7, s7I, s8;
var b, bI;
var d, dI, d1, dI1, d2, d3;
var e1, e1I, e2, e2I,e3, e3I, e4, e4I;
var e5, e6, e7, e8;
var t, tI, t2;
var t1, tI1, t3;
var w, wI, w2;
var w1, wI1, w3;
var wi, wiI, wi2;
var wi1, wiI1, wi3;
var bg1, bg1I;
var bg, bgI;
var box, boxI, box1, box2, box3, box4, box5, box6, box7;
var play, playI;
var non, nonI;
var b
var buttonSound
function preload(){
 bI = loadImage("doll.png")
  dI = loadImage("d5.png")
  s1I = loadImage("s.png")
  s2I = loadImage("s1.png")
   e1I = loadImage("ear.png")
   e2I = loadImage("ear1.png")
  tI = loadImage("t.gif")
  wI = loadImage("w.png")
  wiI = loadImage("wi.png")
  bg1I = loadImage("p.jpg")
  boxI = loadImage("b.jpg")
  dI1 = loadImage("c.png")
  s5I = loadImage("sh.png")
  s7I = loadImage("sh1.png")
  e3I = loadImage("e1.png")
  e4I = loadImage("e2.png")
  tI1 = loadImage("t.png")
  wI1 = loadImage("w1.png")
  wiI1 = loadImage("wi1.png")
  bgI = loadImage("bg3.jpg")
  playI = loadImage("play.png")
  nonI = loadImage("non.jpg")
  bg2I = loadImage("b1.jpg")
  bg3I = loadImage("bg1.jpg")
  bg4I = loadImage("bg5.jpg")
  helpI = loadImage("help.ico")
  helpI1 = loadImage("help.png")
  backI = loadImage("back.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  bg3 = createSprite(700, 430, 10, 10)
  bg3.addImage(bg3I)
  bg3.scale = 2.5

  bg1 = createSprite(700, 300, 10, 10)
  bg1.addImage(bg1I)
  bg1.scale = 2.5
  bg1.visible = false

  bg2 = createSprite(700, 300, 10, 10)
  bg2.addImage(bg2I)
  bg2.scale = 2.5
  bg2.visible = false

  bg4 = createSprite(700, 300, 10, 10)
  bg4.addImage(bg4I)
  bg4.scale = 2.5
  bg4.visible = false

  box4 = createSprite(600, 250, 10, 10)
  box4.addImage(boxI)
  box4.scale = 0.3
  
  box5 = createSprite(750, 250, 10, 10)
  box5.addImage(boxI)
  box5.scale = 0.3

  wi = createSprite(250,210, 10, 10)
  wi.addImage(wiI)
  wi.scale = 0.6
  wi.visible = false

  wi1 = createSprite(250,220, 10, 10)
  wi1.addImage(wiI1)
  wi1.scale = 0.3
  wi1.visible = false

  e1 = createSprite(220,200, 10, 10)
  e1.addImage(e1I)
  e1.scale = 0.07
  e1.visible = false

  e2 = createSprite(275,200, 10, 10)
  e2.addImage(e2I)
  e2.scale = 0.07
  e2.visible = false

  e3 = createSprite(220,200, 10, 10)
  e3.addImage(e3I)
  e3.scale = 0.08
  e3.visible = false

  e4 = createSprite(275,200, 10, 10)
  e4.addImage(e4I)
  e4.scale = 0.08
  e4.visible = false

  e5 = createSprite(580, 250, 10, 10)
  e5.addImage(e1I)
  e5.scale = 0.1
  e5.visible = true

  e6 = createSprite(730, 250, 10, 10)
  e6.addImage(e3I)
  e6.scale = 0.1
  e6.visible = true

  e7 = createSprite(610, 250, 10, 10)
  e7.addImage(e2I)
  e7.scale = 0.1
  e7.visible = true

  e8 = createSprite(760, 250, 10, 10)
  e8.addImage(e4I)
  e8.scale = 0.1
  e8.visible = true

  w = createSprite(390,140, 10, 10)
  w.addImage(wI)
  w.scale = 0.4
  w.visible = false

  w1 = createSprite(320,140, 10, 10)
  w1.addImage(wI1)
  w1.scale = 0.4
  w1.visible = false

  b = createSprite(250,300, 10, 10)
  b.addImage(bI)
  b.scale = 0.5

  s1 = createSprite(275,470, 10, 10)
  s1.addImage(s1I)
  s1.scale = 0.1
  s1.visible = false

  s2 = createSprite(242,470, 10, 10)
  s2.addImage(s2I)
  s2.scale = 0.1
  s2.visible = false

  s5 = createSprite(273,465, 10, 10)
  s5.addImage(s5I)
  s5.scale = 0.07
  s5.visible = false

  s7 = createSprite(247,465, 10, 10)
  s7.addImage(s7I)
  s7.scale = 0.07
  s7.visible = false

  d = createSprite(251,340, 10, 10)
  d.addImage(dI)
  d.scale = 0.3
  d.visible = false
  
  d1 = createSprite(250,335, 10, 10)
  d1.addImage(dI1)
  d1.scale = 0.3
  d1.visible = false

  t = createSprite(240,140, 10, 10)
  t.addImage(tI)
  t.scale = 0.2
  t.visible = false

  box = createSprite(600, 50, 10, 10)
  box.addImage(boxI)
  box.scale = 0.3
  
  box1 = createSprite(750, 50, 10, 10)
  box1.addImage(boxI)
  box1.scale = 0.3
  
  box2 = createSprite(600, 150, 10, 10)
  box2.addImage(boxI)
  box2.scale = 0.3
  
  box3 = createSprite(750, 150, 10, 10)
  box3.addImage(boxI)
  box3.scale = 0.3

  box6 = createSprite(600, 350, 10, 10)
  box6.addImage(boxI)
  box6.scale = 0.3
  
  box7 = createSprite(750, 350, 10, 10)
  box7.addImage(boxI)
  box7.scale = 0.3

  box8 = createSprite(600, 450, 10, 10)
  box8.addImage(boxI)
  box8.scale = 0.3
  
  box9 = createSprite(750, 450, 10, 10)
  box9.addImage(boxI)
  box9.scale = 0.3

  box10 = createSprite(600, 550, 10, 10)
  box10.addImage(boxI)
  box10.scale = 0.3
  
  box11 = createSprite(750, 550, 10, 10)
  box11.addImage(boxI)
  box11.scale = 0.3

  box12 = createSprite(900, 50, 10, 10)
  box12.addImage(boxI)
  box12.scale = 0.3

  box13 = createSprite(900, 150, 10, 10)
  box13.addImage(boxI)
  box13.scale = 0.3

  box14 = createSprite(900, 250, 10, 10)
  box14.addImage(boxI)
  box14.scale = 0.3

  box15 = createSprite(900, 350, 10, 10)
  box15.addImage(boxI)
  box15.scale = 0.3

  box16 = createSprite(900, 450, 10, 10)
  box16.addImage(boxI)
  box16.scale = 0.3

  box17 = createSprite(900, 550, 10, 10)
  box17.addImage(boxI)
  box17.scale = 0.3

  d2 = createSprite(600, 50, 10, 10)
  d2.addImage(dI)
  d2.scale = 0.06
  d2.visible = true

  d3 = createSprite(750, 50, 10, 10)
  d3.addImage(dI1)
  d3.scale = 0.08
  d3.visible = true
  
  s3 = createSprite(590, 150, 10, 10)
  s3.addImage(s1I)
  s3.scale = 0.1
  s3.visible = true

  s4 = createSprite(610, 150, 10, 10)
  s4.addImage(s2I)
  s4.scale = 0.1
  s4.visible = true

  s6 = createSprite(740, 150, 10, 10)
  s6.addImage(s5I)
  s6.scale = 0.07
  s6.visible = true

  s8 = createSprite(760, 150, 10, 10)
  s8.addImage(s7I)
  s8.scale = 0.07
  s8.visible = true

  t1 = createSprite(245,140, 10, 10)
  t1.addImage(tI1)
  t1.scale = 0.02
  t1.visible = false

  t2 = createSprite(600, 350, 10, 10)
  t2.addImage(tI)
  t2.scale = 0.1
  t2.visible = true

  t3 = createSprite(750, 350, 10, 10)
  t3.addImage(tI1)
  t3.scale = 0.01
  t3.visible = true

  w2 = createSprite(600, 440, 10, 10)
  w2.addImage(wI)
  w2.scale = 0.2
  w2.visible = true

  w3 = createSprite(740, 450, 10, 10)
  w3.addImage(wI1)
  w3.scale = 0.2
  w3.visible = true

  wi2 = createSprite(600, 550, 10, 10)
  wi2.addImage(wiI)
  wi2.scale = 0.2
  wi2.visible = true

  wi3 = createSprite(750, 550, 10, 10)
  wi3.addImage(wiI1)
  wi3.scale = 0.08
  wi3.visible = true

  non = createSprite(900, 50, 10, 10)
  non.addImage(nonI)
  non.scale = 0.1

  non1 = createSprite(900, 150, 10, 10)
  non1.addImage(nonI)
  non1.scale = 0.1

  non2 = createSprite(900, 250, 10, 10)
  non2.addImage(nonI)
  non2.scale = 0.1

  non3 = createSprite(900, 350, 10, 10)
  non3.addImage(nonI)
  non3.scale = 0.1

  non4 = createSprite(900, 450, 10, 10)
  non4.addImage(nonI)
  non4.scale = 0.1

  non5 = createSprite(900, 550, 10, 10)
  non5.addImage(nonI)
  non5.scale = 0.1

  box0 = createSprite(1050, 100, 10, 10)
  box0.addImage(boxI)
  box0.scale = 0.4
  
  box00 = createSprite(1050, 220, 10, 10)
  box00.addImage(boxI)
  box00.scale = 0.4

  box000 = createSprite(1050, 340, 10, 10)
  box000.addImage(boxI)
  box000.scale = 0.4
  
  box0000 = createSprite(1050, 450, 10, 10)
  box0000.addImage(boxI)
  box0000.scale = 0.3

  non6 = createSprite(1050, 450, 10, 10)
  non6.addImage(nonI)
  non6.scale = 0.1

  b = createSprite(1050, 100, 10, 10)
  b.addImage(bg1I)
  b.scale = 0.1
  
  b1 = createSprite(1050, 220, 10, 10)
  b1.addImage(bg2I)
  b1.scale = 0.1

  b2 = createSprite(1050, 340, 10, 10)
  b2.addImage(bg4I)
  b2.scale = 0.1

  bg = createSprite(700, 380, 10, 10)
  bg.addImage(bgI)
  bg.scale = 0.8
  bg.visible = true
  
  play = createSprite(1200, 380, 100, 10)
  play.addImage(playI)
  play.scale = 0.5

  help = createSprite(40, 40, 100, 10)
  help.addImage(helpI)
  help.scale = 0.2

  help1 = createSprite(700, 340, 100, 10)
  help1.addImage(helpI1)
  help1.scale = 1
  help1.visible = false

  back = createSprite(840, 530, 100, 10)
  back.addImage(backI)
  back.scale = 0.04
  back.visible = false

  
  

  

}

function draw() {
  background(0);
 
  if(mousePressedOver(box)) {
    Box();
  }

  if(mousePressedOver(box1)) {
    Box1();
  }

  if(mousePressedOver(box2)) {
    Box2();
  }

  if(mousePressedOver(box3)) {
    Box3();
  }

  if(mousePressedOver(box4)) {
    Box4();
  }

  if(mousePressedOver(box5)) {
    Box5();
  }

  if(mousePressedOver(box6)) {
    Box6();
  }

  if(mousePressedOver(box7)) {
    Box7();
  }

  if(mousePressedOver(box8)) {
    Box8();
  }

  if(mousePressedOver(box9)) {
    Box9();
  }

  if(mousePressedOver(box10)) {
    Box10();
  }

  if(mousePressedOver(box11)) {
    Box11();
  }

  if(mousePressedOver(box12)) {
    Box12();
  }

  if(mousePressedOver(box13)) {
    Box13();
  }

  if(mousePressedOver(box14)) {
    Box14();
  }

  if(mousePressedOver(box15)) {
    Box15();
  }

  if(mousePressedOver(box16)) {
    Box16();
  }

  if(mousePressedOver(box17)) {
    Box17();
  }

  if(mousePressedOver(play)) {
    Play();
  }

  if(mousePressedOver(box0)) {
    Box0();
  }

  if(mousePressedOver(box00)) {
    Box00();
  }

  if(mousePressedOver(box000)) {
    Box000();
  }

  if(mousePressedOver(box0000)) {
    Box0000();
  }

  if(mousePressedOver(help)) {
    Help();
  }

  if(mousePressedOver(back)) {
    Back();
  }

     drawSprites()   
}

function Box() {
  d.visible = true
  d2.visible = false
  d1.visible = false
  d3.visible = true
}

function Box1() {
  d1.visible = true
  d3.visible = false
  d.visible = false
  d2.visible = true
}

function Box2() {
  s1.visible = true
  s2.visible = true
  s3.visible = false
  s4.visible = false
  s5.visible = false
  s7.visible = false
  s6.visible = true
  s8.visible = true
}

function Box3() {
  s5.visible = true
  s7.visible = true
  s6.visible = false
  s8.visible = false
  s1.visible = false
  s2.visible = false
  s3.visible = true
  s4.visible = true
}

function Box4() {
  e1.visible = true
  e2.visible = true
  e5.visible = false
  e7.visible = false
  e3.visible = false
  e4.visible = false
  e6.visible = true
  e8.visible = true
}

function Box5() {
  e3.visible = true
  e4.visible = true
  e6.visible = false
  e8.visible = false
  e1.visible = false
  e2.visible = false
  e5.visible = true
  e7.visible = true
}

function Box6() {
  t.visible = true
  t2.visible = false
  t1.visible = false
  t3.visible = true
}

function Box7() {
 t.visible = false
 t2.visible = true
 t1.visible = true
 t3.visible = false
}

function Box8() {
  w.visible = true
  w2.visible = false
  w1.visible = false
  w3.visible = true
}

function Box9() {
 w.visible = false
 w2.visible = true
 w1.visible = true
 w3.visible = false
}

function Box10() {
  wi.visible = true
  wi2.visible = false
  wi1.visible = false
  wi3.visible = true
}

function Box11() {
 wi.visible = false
 wi2.visible = true
 wi1.visible = true
 wi3.visible = false
}

function Play() {
  bg.visible = false
  play.visible = false
}

function Box12(){
  d.visible = false
  d1.visible = false
  d2.visible = true
  d3.visible = true
}

function Box13(){
  s1.visible = false
  s2.visible = false
  s5.visible = false
  s7.visible = false
  s3.visible = true
  s4.visible = true
  s6.visible = true
  s8.visible = true
}

function Box14(){
  e1.visible = false
  e2.visible = false
  e3.visible = false
  e4.visible = false
  e5.visible = true
  e6.visible = true
  e7.visible = true
  e8.visible = true
}
  
function Box15(){
  t.visible = false
  t1.visible = false
  t2.visible = true
  t3.visible = true
}
  
function Box16(){
  w.visible = false
  w1.visible = false
  w2.visible = true
  w3.visible = true
}
  
function Box17(){
  wi.visible = false
  wi1.visible = false
  wi2.visible = true
  wi3.visible = true
}
  
function Box0(){
  bg1.visible = true
  b.visible = false
  bg2.visible = false
  b1.visible = true
  bg4.visible = false
  b2.visible = true
}
  
function Box00(){
  bg1.visible = false
  b.visible = true
  bg2.visible = true
  b1.visible = false
  bg4.visible = false
  b2.visible = true
}
  
function Box000(){
  bg4.visible = true
  b2.visible = false
  bg1.visible = false
  b.visible = true
  bg2.visible = false
  b1.visible = true
}
  
function Box0000(){
  bg4.visible = false
  b2.visible = true
  bg1.visible = false
  b.visible = true
  bg2.visible = false
  b1.visible = true
  bg3.visible = true
}
  
function Help(){
  help1.visible = true
  back.visible = true
}
function Back(){
  help1.visible = false
  back.visible = false
}
  