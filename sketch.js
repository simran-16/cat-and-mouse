var background1, backgroundimg;
var cat,mouse;
var catimg, mouseimg;
var catimg2, mouseimg2;

function preload() {
    //load the images here
    backgroundimg= loadImage("images/garden.png");
    catimg= loadImage("images/cat1.png");
    catimg2 =loadAnimation("images/cat2.png", "images/cat3.png", "images/cat4.png");
    mouseimg = loadImage("images/mouse1.png");
    mouseimg2= loadAnimation("images/mouse2.png", "images/mouse3.png", "images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background1= createSprite(0,0,1000,800);
    background1.addImage(backgroundimg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){

    cat.velocityX=-5;
    cat.addAnimation("catrunning", catimg2);
    cat.changeAnimation("catrunning");
    mouse.addAnimatin("teasing", mouseimg2);
    mouse.changeAnimation("teasing");
}

}
