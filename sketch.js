  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];

var Bruce;
var BruceAnimation;
var umbrellaObject;
var backgroundImg
var Thundersound
var ThunderImg1;
var ThunderImg2;
var ThunderImg3;
var ThunderImg4;
var rand;
var Thunder;

function preload(){
    
    BruceAnimation = loadAnimation("images/Walking Frame/walking_8.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_3.png",
    "images/Walking Frame/walking_2.png","images/Walking Frame/walking_1.png");

    backgroundImg= loadImage("background.jpg")

    Thundersound= loadSound("Rain And Thunder.wav")

    ThunderImg1= loadImage("images/thunderbolt/1.png");
    ThunderImg2= loadImage("images/thunderbolt/2.png");
    ThunderImg3= loadImage("images/thunderbolt/3.png");
    ThunderImg4= loadImage("images/thunderbolt/4.png");

}

function setup(){
    engine = Engine.create();
    world = engine.world;
    Thundersound.loop();
    Thundersound.play();
    scenery= createSprite(400,350,800,700)
    scenery.addImage(backgroundImg)
    scenery.velocityX = -2;
    scenery.scale = 3;
    createCanvas(800,700);
    if(frameCount % 200 === 0){

        for(var i=0; i<50; i++){
            drops.push(new WaterDrops(random(0,800), random(0,800)));
        }

    }
    Bruce = createSprite(400,525,50,100);
    Bruce.addAnimation("batman",BruceAnimation)
    Bruce.scale = 0.5;


    umbrellaObject = new Umbrella(400,435)

  
}

function draw(){
    Engine.update(engine);
    background(0); 
    drawSprites();
    if(scenery.x<0){
    scenery.x=400;
    }

    //displaying rain drops
    for(var i = 0; i<50; i++){
        drops[i].display();
        drops[i].update_Y_Position();
        
    }
    umbrellaObject.display();


    rand = Math.round(random(1,4));
    if(frameCount%80===0){
      
        thunder = createSprite(random(10,770), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(ThunderImg1);
            break;
            case 2: thunder.addImage(ThunderImg2);
            break; 
            case 3: thunder.addImage(ThunderImg3);
            break;
            case 4: thunder.addImage(ThunderImg4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime=20;
    }

    
   

}





