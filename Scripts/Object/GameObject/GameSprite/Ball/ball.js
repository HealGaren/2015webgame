function Ball(){
	GameSprite.call(this, imageTool.images.enemy, 30, 40);
	this.rad = Math.random() * 2 * Math.PI;
	this.speed = Math.random() * 2 + 2;
	this.isCamera = true;
}

Ball.prototype = Object.create(GameSprite.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.update = function(){

	this.pos.x += Math.sin(this.rad) * this.speed;
	this.pos.y += Math.cos(this.rad) * this.speed;

	if(this.pos.x < 0){
		this.rad = Math.atan2(-Math.sin(this.rad), Math.cos(this.rad));
		this.pos.x *= -1;
	}
	if(this.pos.x > define.mapWidth){
		this.rad = Math.atan2(-Math.sin(this.rad), Math.cos(this.rad));
		this.pos.x = define.mapWidth - (this.pos.x - define.mapWidth);
	}
	if(this.pos.y<  0){
		this.rad = Math.atan2(Math.sin(this.rad), -Math.cos(this.rad));
		this.pos.y *= -1;
	}
	if(this.pos.y > define.mapHeight){
		this.rad = Math.atan2(Math.sin(this.rad), -Math.cos(this.rad));
		this.pos.y = define.mapHeight - (this.pos.y - define.mapHeight);
	}
};