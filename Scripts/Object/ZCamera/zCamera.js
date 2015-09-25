function ZCamera(){
	this.pos = new ZPos(0, 0);
	this.target = null;
}

ZCamera.prototype.update = function() {
	if (this.target) {
		this.pos.x += ((this.target.pos.x) - (this.pos.x + drawTool.canvas.width / 2)) / 10;
		this.pos.y += ((this.target.pos.y) - (this.pos.y + drawTool.canvas.height / 2)) / 10;

		if (this.pos.x < 0) this.pos.x = 0;
		if (this.pos.x > define.mapWidth - drawTool.canvas.width) this.pos.x = define.mapWidth - drawTool.canvas.width;
		if (this.pos.y < 0) this.pos.y = 0;
		if (this.pos.y > define.mapHeight - drawTool.canvas.height) this.pos.y = define.mapHeight - drawTool.canvas.height;
	}
};

ZCamera.prototype.setTarget = function(target){
	this.target = target;
};

var zCamera = new ZCamera();