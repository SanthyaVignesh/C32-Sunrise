const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,hour ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);

    textSize(20);
    // write code to display time in correct format here
    if(hour>00 && hour<12){
        text("Time : "+hour+" AM",500,75);
    }
    else if(hour == 00){
        text("Time : 12 AM",500,75);
    }
    else if(hour == 12){
        text("Time : 12 PM",500,75);
    }
    else{
        text("Time : "+hour+" PM",500,75);
    }
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responseAPI = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    //change the data in JSON format
    var responseJSON = await responseAPI.json();

    // write code slice the datetime
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>= 06 && hour<= 07){
        bg = "sunrise2.png";
    }
    else if(hour>= 07 && hour<= 08){
        bg = "sunrise3.png";
    }
    else if(hour>= 08 && hour<= 11){
        bg = "sunrise4.png";
    }
    else if(hour>= 12 && hour<= 13){
        bg = "sunrise5.png";
    }
    else if(hour>= 13 && hour<= 14){
        bg = "sunrise6.png";
    }
    else if(hour>= 14 && hour<= 15){
        bg = "sunrise7.png";
    }
    else if(hour>= 15 && hour<= 16){
        bg = "sunrise8.png";
    }
    else if(hour>= 17 && hour<= 18){
        bg = "sunrise9.png";
    }
    else if(hour>= 18 && hour<= 21){
        bg = "sunrise10.png";
    }
    else if(hour>= 21 && hour<= 23){
        bg = "sunrise11.png";
    }
    else if(hour>= 00 && hour<= 03){
        bg = "sunrise12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
