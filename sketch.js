//Create variables here
var dog
var happyDog
var databse
var foodS
var foodStock
var dogHappy

function preload()
{
  dogHappy = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(350,350,20,20)
  dog.addImage(dogHappy);

  database = firebase.database();
   
  
  
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
foodS = foodS - 1
  writeStock(foodS);
 
  
  dog.addImage(happyDog)
}

  drawSprites();
  //add styles here
  fill("white")
  text("Food remaining: " + foodS,20,20);
  

}
function readStock(data){
foodS = data.val();



}

function writeStock(x){

if(x<=0){
  x=0;
}


database.ref('/').update({
  Food:x
})



}
function showError(){
  console.log("error")
}




