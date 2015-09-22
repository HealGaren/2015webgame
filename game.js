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

var balls = [
	{x:200, y:500, speedX:1.5, speedY:1.5},
	{x:800, y:100, speedX:2, speedY:-2},
	{x:1300, y:300, speedX:-3, speedY:3},
	{x:1800, y:680, speedX:-2.5, speedY:-2.5}
];

var mapHeight = 1000;
var mapWidth = 2000;

var playerPosX = 500;
var playerPosY = 500;
var targetX = 500;
var targetY = 500;

var camPosX = 0;
var camPosY = 0;

var keyState = [];


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
			
		case GAMESTATE_OVER:
			
			break; 
	}


}

function addBall(){
	var randMath = Math.random();
	if(randMath<0.5){
		balls.push(
			{x:Math.random()*mapWidth, y:Math.random()*mapHeight, speedX:1.5, speedY:1.5}
		);
	}
	else {
		balls.push(
			{x:Math.random()*mapWidth, y:Math.random()*mapHeight, speedX:2, speedY:-2}
		);
	}
}


function onkeydown(e){
	e.preventDefault();
	e.stopPropagation();
	
	switch(GameState){
		
		case GAMESTATE_READY:
			GameState = GAMESTATE_GAME;
			setInterval(addBall, 10);
			break;
		
		case GAMESTATE_GAME:
			break;
		
		case GAMESTATE_OVER:
			break; 
	}

	switch(e.keyCode){
		case 37 : 
			targetX-=10;
			if(targetX<0) targetX=0;
			break;
		case 39 :
			targetX+=10;
			if(targetX>mapWidth) targetX=mapWidth;
			break;
		case 38 :
			targetY-=10;
			if(targetY<0) targetY=0;
			break;
		case 40 :
			targetY+=10;
			if(targetY>mapHeight) targetY=mapHeight;
			break;
	}
}

function onkeyup(e){
	e.preventDefault();
	e.stopPropagation();
}



function gameUpdate(){
	switch(GameState){
		
		case GAMESTATE_READY:
			break;
		
		case GAMESTATE_GAME:
			playerPosX += (targetX - playerPosX)/20;
			playerPosY += (targetY - playerPosY)/20;
			
			camPosX += ((playerPosX + 50) - (camPosX + Canvas.width/2))/10;
			camPosY += ((playerPosY + 50) - (camPosY + Canvas.height/2))/10;
			
			if(camPosX < 0) camPosX = 0;
			if(camPosX > mapWidth-Canvas.width) camPosX = mapWidth-Canvas.width;
			if(camPosY < 0) camPosY = 0;
			if(camPosY > mapHeight-Canvas.height) camPosY = mapHeight-Canvas.height;
			
			for(var i=0; i<balls.length; i++){
				balls[i].x+=balls[i].speedX;
				balls[i].y+=balls[i].speedY;
				if(balls[i].x<0){
					balls[i].speedX*=-1;
					balls[i].x*=1;
				}
				if(balls[i].y<0){
					balls[i].speedY*=-1;
					balls[i].y*=1;
				}
				if(balls[i].x>mapWidth){
					balls[i].speedX*=-1;
					balls[i].x-=(balls[i].x-mapWidth)*2;
				}
				if(balls[i].y>mapHeight){
					balls[i].speedY*=-1;
					balls[i].y-=(balls[i].y-mapHeight)*2;
				}
			}
			
			break;
		
		case GAMESTATE_OVER:
			break; 
	}
	drawScreen();
}
