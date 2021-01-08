var canvas,backgroungimage;
var gameState = 0;
var playerCount,database;
var form,player,game;

function setup(){

canvas=createCanvas(500,500);
database = fire.database();
game=new Game();
game.setState();

game.start();

}

function draw(){

game.display()


}