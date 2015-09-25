window.addEventListener("load", onLoad, false);

var intervalID;
var GameState;
var text_Ready = null;
var text_Over = null;

var balls;
var player;

var background = new GameSprite(imageTool.images.background, 2000, 1000);
background.isCamera = true;

function onLoad(){
	console.log('load done!');
	drawTool.init();
	imageTool.init();
	keyTool.init();
	onReady();
	intervalID = setInterval(gameUpdate, 1000/60);
}

function drawScreen(){
	drawTool.context.clearRect(0, 0, 1024, 768);
	switch(GameState){
		
		case define.gameState.READY:
			text_Ready.draw();
			break;
		
		case define.gameState.GAME:
			background.draw();
			player.draw();
			for(var i=0; i<balls.length; i++){
				balls[i].draw();
			}
			break;
			
		case define.gameState.OVER:
			text_Over.draw();
			break;

	}
}

function gameUpdate(){
	keyTool.update();
	zCamera.update();
	switch(GameState){
		
		case define.gameState.READY:
			if(keyTool.keyState[13] === keyTool.states.KEY_DOWN) onGameStart();
			break;
		
		case define.gameState.GAME:

			player.update();
			for(var i=0; i<balls.length; i++){
				balls[i].update();
				if(balls[i].isCollision(player)) onGameOver();
			}
			
			break;
		
		case define.gameState.OVER:
			break; 
	}
	drawScreen();
}

function onReady(){
	text_Ready = new GameText("준 비", "50px 굴림체", "#000", "center");
	text_Over = new GameText("게임 오버", "50px 굴림체", "#000", "center");
	text_Ready.pos.x = text_Over.pos.x = drawTool.canvas.width * 0.5;
	text_Ready.pos.y = text_Over.pos.y = drawTool.canvas.height * 0.5;
	GameState = define.gameState.READY;
	balls = [];

}

function onGameStart(){
	GameState = define.gameState.GAME;
	player = new Player(500, 500);
	for(var i=0; i<50; i++) balls.push(new Ball());
	zCamera.setTarget(player);
	zCamera.pos.setPos(player.pos);
	console.log(zCamera.pos.x + ", " + zCamera.pos.y);
}

function onGameOver(){
	GameState = define.gameState.OVER;
}


