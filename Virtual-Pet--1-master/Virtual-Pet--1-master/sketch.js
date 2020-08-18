//Create variables here
var dog,happydog,database,foodS,foodstock;
function preload()
{
  //load images here
  dogstand = loadImage("images/dogImg.png");
  doghapy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(260,200,20,20);
  dog.addImage(dogstand);
  dog.scale = 0.2;
  foodstock = database.ref('food');
  foodstock.on("value",readstock);
}


function draw() {  
   background("blue");
   if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(doghapy);
   }
  drawSprites();
  //add styles here
  
  textSize(28); 
  fill("green");
  text("reamining food:"+foodS,130,100);
}

function readstock(data){
foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
  database.ref("/").update({
    'food' : x
  })
}


