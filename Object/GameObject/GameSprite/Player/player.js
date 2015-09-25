function Player(x, y){
	GameSprite.call(this, imageTool.images.player, 50, 30)
	this.pos.x = x;
	this.pos.y = y;
	this.speed = 5;
	this.isCamera = true;
}

Player.prototype = Object.create(GameSprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
	if(keyTool.keyState[37] === keyTool.states.KEY_ON && !(keyTool.keyState[39] === keyTool.states.KEY_ON)) {
		this.pos.x -= this.speed;
		if(this.pos.x<0) this.pos.x=0;
	}
	if(keyTool.keyState[39] === keyTool.states.KEY_ON && !(keyTool.keyState[37] === keyTool.states.KEY_ON)) {
		this.pos.x += this.speed;
		if (this.pos.x > define.mapWidth) this.pos.x = define.mapWidth;
	}
	if(keyTool.keyState[38] === keyTool.states.KEY_ON && !(keyTool.keyState[40] === keyTool.states.KEY_ON)) {
		this.pos.y -= this.speed;
		if(this.pos.y < 0) this.pos.y=0;
	}
	if(keyTool.keyState[40] === keyTool.states.KEY_ON && !(keyTool.keyState[38] === keyTool.states.KEY_ON)) {
		this.pos.y += this.speed;
		if(this.pos.y > define.mapHeight) this.pos.y=define.mapHeight;
	}

	console.log(keyTool.keyState[37]);
};
