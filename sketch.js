var database;
var freefireimg,freefire,WALLPAPERImg,WALLPAPER;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2,player1Img;
var players;

var player1score =0;
var player2score =0;

function preload(){
freefireimg = loadImage("images/freefire.png");
player1Img=loadImage("images/player1.png");
WALLPAPERImg=loadImage("images/WALLPAPER1.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  
  background(WALLPAPERImg);
   if (playerCount === 1) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
     background(freefireimg);
   }
   if (gameState === 2) {
    
     game.end();
   }
}