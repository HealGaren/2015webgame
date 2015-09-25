/**
 * Created by Odoroki on 2015-09-25.
 */

function GameSprite(image, width, height){
    GameObject.call(this, 0, 0);
    this.image = image;
    this.size.width = width;
    this.size.height = height;
}

GameSprite.prototype = Object.create(GameObject.prototype);
GameSprite.prototype.constructor = GameSprite;


GameSprite.prototype.draw = function (){
    if(this.isCamera) drawTool.context.drawImage(this.image, this.pos.x - zCamera.pos.x, this.pos.y - zCamera.pos.y, this.size.width, this.size.height);
    else drawTool.context.drawImage(this.image, this.pos.x, this.pos.y, this.size.width, this.size.height);
};

GameSprite.prototype.update = function (){
};