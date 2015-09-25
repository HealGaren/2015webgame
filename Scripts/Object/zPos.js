function ZPos(x, y){
	this.x = x;
	this.y = y;
}

ZPos.prototype.setPos = function(pos){
	this.x = pos.x;
	this.y = pos.y;
};