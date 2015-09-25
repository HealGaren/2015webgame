/**
 * Created by Odoroki on 2015-09-25.
 */

function GameText(text, font, color, textAlign){
    GameObject.call(this, 0, 0);
    this.text = text;
    this.font = font;
    this.color = color;
    this.textAlign = textAlign;
}

GameText.prototype = Object.create(GameObject.prototype);
GameText.prototype.constructor = GameText;


GameText.prototype.draw = function (){
    drawTool.context.font = this.font;
    drawTool.context.fillType = this.color;
    drawTool.context.textAlign = this.textAlign;
    if(this.isCamera) drawTool.context.fillText(this.text, this.pos.x - zCamera.pos.x, this.pos.y - zCamera.pos.y);
    else drawTool.context.fillText(this.text, this.pos.x, this.pos.y);

};

GameText.prototype.update = function (){
};