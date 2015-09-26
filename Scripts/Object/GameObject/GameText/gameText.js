/**
 * Created by Odoroki on 2015-09-25.
 */

function GameText(text, font, fillColor, textAlign){
    GameObject.call(this, 0, 0);
    this.text = text;
    this.font = font;
    this.strokeColor = "#FFF";
    this.fillColor = fillColor;
    this.textAlign = textAlign;
    this.isStroke = false;
    this.textBaseline = "middle";
}

GameText.prototype = Object.create(GameObject.prototype);
GameText.prototype.constructor = GameText;


GameText.prototype.draw = function (){
    drawTool.context.font = this.font;
    drawTool.context.fillStyle = this.fillColor;
    drawTool.context.strokeStyle = this.strokeColor;
    drawTool.context.textAlign = this.textAlign;
    drawTool.context.textBaseline = this.textBaseline;
    //console.log(this.textBaseline);
    if(this.isCamera) {
        drawTool.context.fillText(this.text, this.pos.x - zCamera.pos.x, this.pos.y - zCamera.pos.y);
        if(this.isStroke) drawTool.context.strokeText(this.text, this.pos.x - zCamera.pos.x, this.pos.y - zCamera.pos.y);

    }
    else {
        drawTool.context.fillText(this.text, this.pos.x, this.pos.y);
        if(this.isStroke) drawTool.context.strokeText(this.text, this.pos.x, this.pos.y);
    }

};

GameText.prototype.update = function (){
};