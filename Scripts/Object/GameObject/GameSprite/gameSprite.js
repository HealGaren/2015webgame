/**
 * Created by Odoroki on 2015-09-25.
 */

function GameSprite(image, width, height){
    GameObject.call(this, width, height);
    this.image = image;
}

GameSprite.prototype = Object.create(GameObject.prototype);
GameSprite.prototype.constructor = GameSprite;

GameSprite.prototype.update = function (){
};

GameSprite.prototype.draw = function (){
    if(this.isCamera) drawTool.context.drawImage(this.image, this.pos.x - zCamera.pos.x, this.pos.y - zCamera.pos.y, this.size.width, this.size.height);
    else drawTool.context.drawImage(this.image, this.pos.x, this.pos.y, this.size.width, this.size.height);
};