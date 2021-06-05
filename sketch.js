const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var time

var engine, world;
var BackgroundImg;

var bg ;
var hour;



function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   // fill("white")
   // text("TIME:"+time, 600 ,350)

   

    // add condition to check if any background image is there to add
    if(BackgroundImg){
            background(BackgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>12){
        textSize(100)
        fill("pink")
        text("TIME:"+hour%12+"PM",50,200)
    }
   
    else if(hour<12){
        textSize(100)
        fill("lightblue")
         text("TIME:"+hour%12+"AM",50,200)
    }
   

}

async function getBackgroundImg(){

    // write code to fetch time from API
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
   var responsejson = await response.json()

   var datetime=responsejson.datetime
    hour = datetime.slice(11,13)

    //change the data in JSON format
   if(hour>= 06 && hour<= 08){
       BackgroundImg=loadImage("sunrise1.png")
   }
    
    if(hour>= 08 && hour<= 10){
        BackgroundImg=loadImage("sunrise2.png")
   }

   if(hour>= 10 && hour<= 12){
    BackgroundImg=loadImage("sunrise3.png")
}

if(hour>= 12 && hour<= 14){
    BackgroundImg=loadImage("sunrise4.png")
}

if(hour>= 14 && hour<= 16){
    BackgroundImg=loadImage("sunrise5.png")
}

if(hour>= 16 && hour<= 18){
    BackgroundImg=loadImage("sunrise6.png")
}

if(hour>= 18 && hour<= 20){
    BackgroundImg=loadImage("sunset7.png")
}

if(hour>= 20 && hour<= 22){
    BackgroundImg=loadImage("sunset8.png")
}

if(hour>= 22 && hour<= 24){
    BackgroundImg=loadImage("sunset9.png")
}

if(hour>= 24 && hour<= 2){
    BackgroundImg=loadImage("sunset10.png")
}

if(hour>= 2 && hour<= 4){
    BackgroundImg=loadImage("sunset11.png")
}

if(hour>= 4 && hour<= 6){
    BackgroundImg=loadImage("sunset12.png")
}


    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
