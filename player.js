function Player(){
	this.pos = new Pos(500, 500);
	this.targetPos = new Pos(500, 500);
	this.speed = 10;
}

Player.prototype.update = function(){
	playerPosX += (targetX - playerPosX)/20;
	playerPosY += (targetY - playerPosY)/20;
}