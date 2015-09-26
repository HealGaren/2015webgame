/**
 * Created by Odoroki on 2015-09-26.
 */

function GameScene(){
    GameObject.call(this, drawTool.canvas.width, drawTool.canvas.height);
}

GameScene.prototype = Object.create(GameObject.prototype);
GameScene.prototype.constructor = GameScene;

GameScene.prototype.update = function (){
};

GameScene.prototype.draw = function (){
};