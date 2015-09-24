window.addEventListener("load", onLoad, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);

var Canvas;
var Context;

var imgBackground = new Image();
imgBackground.src = "background.png";
var imgPlayer = new Image();
imgPlayer.src = "player.png";
var ball = new Image();
ball.src = "enemy.png";

var intervalID;

var mapHeight = 1000;
var mapWidth = 2000;

var camPosX = 0;
var camPosY = 0;

var keyState = [];

var balls = [
];

function Ball(){
	this.x = (Math.random() < 0.5)?0:mapWidth;
	this.y = (Math.random() < 0.5)?0:mapHeight;
	this.rad = Math.random()*2*Math.PI;
	this.speed = 2;
}

Ball.prototype.update = function(){
	this.x+=Math.sin(this.rad)*this.speed;
	this.y+=Math.cos(this.rad)*this.speed;

	if(this.x<0){
		this.rad = Math.atan2(-Math.sin(this.rad), Math.cos(this.rad));
		this.x = -this.x;
	}
	if(this.x>mapWidth){
		this.rad = Math.atan2(-Math.sin(this.rad), Math.cos(this.rad));
		this.x = mapWidth - (this.x-mapWidth);
	}
	if(this.y<0){
		this.rad = Math.atan2(Math.sin(this.rad), -Math.cos(this.rad));
		this.y = -this.y;
	}
	if(this.y>mapHeight){
		this.rad = Math.atan2(Math.sin(this.rad), -Math.cos(this.rad));
		this.y = mapHeight - (this.y-mapHeight);
	}

	if(isCollisionWithPlayer(this.x, this.y)){
		onGameOver();	
	}
}

function Player(){
	this.targetX = this.x = 500;
	this.targetY = this.y = 500;
	this.speed = 10;
}

Player.prototype.update = function(){
	playerPosX += (targetX - playerPosX)/20;
	playerPosY += (targetY - playerPosY)/20;
}

var player = new Player();

function Camera(){
	this.x = player.x;
	this.y = player.y;
}


var isClicked;

var offsetLeft, offsetTop;

var GAMESTATE_READY = 0;
var GAMESTATE_GAME = 1;
var GAMESTATE_OVER = 2;

var GameState = GAMESTATE_READY;

function onLoad(){
	Canvas = document.getElementById("GameCanvas");
	Context = Canvas.getContext("2d");
	offsetLeft = Canvas.offsetLeft-42;
	offsetTop = Canvas.offsetTop-50; 
	intervalId = setInterval(gameUpdate, 1000/60);
}

function drawScreen(){

	switch(GameState){
		
		case GAMESTATE_READY:
			Context.clearRect(0, 0, 1024, 768);
			Context.font = "50px 굴림체";
			Context.fillType = "#000";
			Context.textAlign = "center";
			Context.fillText("준 비", 512, 384);
			break;
		
		case GAMESTATE_GAME:
			Context.drawImage(imgBackground, -camPosX, -camPosY);
			Context.drawImage(imgPlayer, playerPosX-camPosX, playerPosY-camPosY, 70, 50);
			for(var i=0; i<balls.length; i++){
				Context.drawImage(ball, balls[i].x-camPosX, balls[i].y-camPosY, 50, 40);
			}
			break;
			
		case GAMESTATE_OVER:
			Context.clearRect(0, 0, 1024, 768);
			Context.font = "50px 굴림체";
			Context.fillType = "#000";
			Context.textAlign = "center";
			Context.fillText("게임 오버", 512, 384);
			break;
	}


}

function addBall(){
	balls.push(new Ball);
}


function onkeydown(e){
	e.preventDefault();
	e.stopPropagation();
	
	switch(GameState){
		
		case GAMESTATE_READY:
			onGameStart();
			break;
		
		case GAMESTATE_GAME:
			break;
		
		case GAMESTATE_OVER:
			break; 
	}

	switch(e.keyCode){
		case 37 : 
			targetX-=50;
			if(targetX<0) targetX=0;
			break;
		case 39 :
			targetX+=50;
			if(targetX>mapWidth) targetX=mapWidth;
			break;
		case 38 :
			targetY-=50;
			if(targetY<0) targetY=0;
			break;
		case 40 :
			targetY+=50;
			if(targetY>mapHeight) targetY=mapHeight;
			break;
	}
}

function onkeyup(e){
	e.preventDefault();
	e.stopPropagation();
}

function isCollisionWithPlayer(x, y){
	if(
		playerPosX + 70 > x + 15 &&
		playerPosX < x + 35 &&
		playerPosY < y + 30 &&
		playerPosY + 50 > y + 10
	){
		return true;
	}
	return false;
}

function gameUpdate(){
	switch(GameState){
		
		case GAMESTATE_READY:
			break;
		
		case GAMESTATE_GAME:

			
			camPosX += ((playerPosX + 50) - (camPosX + Canvas.width/2))/10;
			camPosY += ((playerPosY + 50) - (camPosY + Canvas.height/2))/10;
			
			if(camPosX < 0) camPosX = 0;
			if(camPosX > mapWidth-Canvas.width) camPosX = mapWidth-Canvas.width;
			if(camPosY < 0) camPosY = 0;
			if(camPosY > mapHeight-Canvas.height) camPosY = mapHeight-Canvas.height;
			
			balls.forEach(function (ball){ball.update()});
			
			break;
		
		case GAMESTATE_OVER:
			break; 
	}
	drawScreen();
}

function onReady(){
	GameState = GAMESTATE_READY;
	playerPosX = 500;
	playerPosY = 500;
}

function onGameStart(){
	GameState = GAMESTATE_GAME;
	intervalID = setInterval(addBall, 100);
}

function onGameOver(){
	GameState = GAMESTATE_OVER;
	clearInterval(intervalID);
}