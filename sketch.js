var background1, backgroundimg;
var cat,mouse;
var catimg, mouseimg;
var catimg2, mouseimg2;

function preload() {
    //load the images here
    backgroundimg= loadImage("garden.png");
    catimg= loadImage("cat1.png");
    catimg2 =loadAnimation("cat2.png", "cat3.png", "cat4.png");
    mouseimg = loadImage("mouse1.png");
    mouseimg2= loadAnimation("mouse2.png", "mouse3.png", "mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background1= createSprite(0,0,1000,800);
    background1.addImage(backgroundimg);
    background1.scale=5;
    mouse = createSprite(250,600);
    mouse.addImage(mouseimg);
    mouse.scale=0.1;
    cat= createSprite(750,600);
    cat.addImage(catimg);
    cat.scale=0.2;
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

    
    cat.addAnimation("catrunning", catimg2);
    cat.changeAnimation("catrunning");
    cat.velocityX=-5;
    mouse.addAnimation("teasing", mouseimg2);
    mouse.changeAnimation("teasing");
}

}
