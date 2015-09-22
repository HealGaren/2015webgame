window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);

window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var Canvas;
var Context;

var imgBackground = new Image();
imgBackground.src = "background.png";
var imgPlayer = new Image();
imgPlayer.src = "player.png";

var keyEventType = "??";
var keyEventCode = "??";

var playerPosX = 500;
var playerPosY = 500;
var targetX = 500;
var targetY = 500;

var camPosX = 0;
var camPosY = 0;

var mouseX;
var mouseY;


var isClicked;

var eBuffer;

function drawScreen(){
	Canvas = document.getElementById("GameCanvas");
	Context = Canvas.getContext("2d");
	Context.drawImage(imgBackground, -camPosX, -camPosY);
	Context.drawImage(imgPlayer, playerPosX-camPosX, playerPosY-camPosY, 70, 50);

//	Context.font = "50px 궁서체";
//	Context.fillType = "#000";
//	Context.fillText("이벤트 타입 : " + keyEventType, 300, 300);
//	Context.fillText("이벤트 코드 : " + keyEventCode, 300, 350);
}

function onkeydown(e){
	e.preventDefault();
	e.stopPropagation();
	keyEventType = e.type;
	var code;
	if(e.keyCode) code = e.keyCode;
	keyEventCode = String.fromCharCode(code);
//	drawScreen();
}

function onkeyup(e){
	e.preventDefault();
	e.stopPropagation();
	keyEventType = e.type;
	var code;
	if(e.keyCode) code = e.keyCode;
	keyEventCode = String.fromCharCode(code);
//	drawScreen();
}


function gameUpdate(){
	
	if(isClicked){
		targetX = eBuffer.clientX - Canvas.offsetLeft-42 + camPosX;
		targetY = eBuffer.clientY - Canvas.offsetTop-50 + camPosY;
	}
	playerPosX += (targetX - playerPosX)/20;
	playerPosY += (targetY - playerPosY)/20;

	camPosX += ((playerPosX + 50) - (camPosX + Canvas.width/2))/10;
	camPosY += ((playerPosY + 50) - (camPosY + Canvas.height/2))/10;
	
	if(camPosX < 0) camPosX = 0;
	if(camPosX > 2000-Canvas.width) camPosX = 2000-Canvas.width;
	if(camPosY < 0) camPosY = 0;
	if(camPosY > 1000-Canvas.height) camPosY = 1000-Canvas.height;
	drawScreen();
}

setInterval(gameUpdate, 1000/60);

function onMouseMove(e){
	e.preventDefault();
	e.stopPropagation();
	eBuffer = e;

}

function onMouseDown(e){
	e.preventDefault();
	e.stopPropagation();
	isClicked = true;
//	targetX = e.clientX - Canvas.offsetLeft-42 + camPosX;
//	targetY = e.clientY - Canvas.offsetTop-50 + camPosY;
}

function onMouseUp(e){
	e.preventDefault();
	e.stopPropagation();
	isClicked = false;
}
