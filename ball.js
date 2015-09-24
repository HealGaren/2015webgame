function Ball(){

	this.pos = new Pos(
		(Math.random() < 0.5)?0:mapWidth,
		(Math.random() < 0.5)?0:mapHeight
	);

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