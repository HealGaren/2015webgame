/**
 * Created by Odoroki on 2015-09-26.
 */

function ReadyScene(){
    GameScene.call(this);

    this.text_Ready = new GameText("준 비", "50px 굴림체", "#000", "center");
    this.text_Ready.pos.x = drawTool.canvas.width * 0.5;
    this.text_Ready.pos.y = drawTool.canvas.height * 0.5;
}

ReadyScene.prototype = Object.create(GameScene.prototype);
ReadyScene.prototype.constructor = ReadyScene;

ReadyScene.prototype.update = function (){
    if(keyTool.keyState[13] === keyTool.states.KEY_DOWN) sceneManager.setScene(new InGameScene());
};

ReadyScene.prototype.draw = function (){
    this.text_Ready.draw();
};