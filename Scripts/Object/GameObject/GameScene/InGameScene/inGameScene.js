/**
 * Created by Odoroki on 2015-09-26.
 */

function InGameScene(){
    GameScene.call(this);

    this.background = new GameSprite(imageTool.images.background, define.mapWidth, define.mapHeight);
    this.background.isCamera = true;

    this.player = new Player(500, 500);

    this.balls = [];
    for(var i=0; i<20; i++) this.balls.push(new Ball());

    this.score = 0;
    this.scoreText = new GameText("점수 : 0", "50px 굴림체", "#000", "right");
    this.scoreText.textBaseline = "top";
    this.scoreText.isStroke = true;
    this.scoreText.pos.x = drawTool.canvas.width - 20;
    this.scoreText.pos.y = 20;

    zCamera.setTarget(this.player);

    this.tickCounter = 0;
}

InGameScene.prototype = Object.create(GameScene.prototype);
InGameScene.prototype.constructor = InGameScene;

InGameScene.prototype.update = function (){

    this.score++;
    this.scoreText.text = "점수 : " + this.score;

    if(++this.tickCounter >= 5 * define.FPS){
        this.balls.push(new Ball());
        this.tickCounter = 0;
    }

    this.player.update();
    for(var i=0; i<this.balls.length; i++){
        this.balls[i].update();
        if(this.balls[i].isCollision(this.player)) sceneManager.setScene(new OverScene(this.score));
    }
};

InGameScene.prototype.draw = function (){
    this.background.draw();
    this.player.draw();
    for(var i=0; i<this.balls.length; i++){
        this.balls[i].draw();
    }
    this.scoreText.draw();
};