/**
 * Created by Odoroki on 2015-09-26.
 */

function OverScene(score){
    GameScene.call(this);

    this.text_Over = new GameText("게임 오버", "50px 굴림체", "#000", "center");
    this.text_Over.pos.x = drawTool.canvas.width * 0.5;
    this.text_Over.pos.y = drawTool.canvas.height * 0.4;

    this.text_Score = new GameText("점수 : " + score, "50px 굴림체", "#000", "center");
    this.text_Score.pos.x = drawTool.canvas.width * 0.5;
    this.text_Score.pos.y = drawTool.canvas.height * 0.6;
}

OverScene.prototype = Object.create(GameScene.prototype);
OverScene.prototype.constructor = OverScene;

OverScene.prototype.update = function (){
    if(keyTool.keyState[13] === keyTool.states.KEY_DOWN) sceneManager.setScene(new ReadyScene());
};

OverScene.prototype.draw = function (){
    this.text_Over.draw();
    this.text_Score.draw();
};