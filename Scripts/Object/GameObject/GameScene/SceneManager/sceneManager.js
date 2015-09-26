/**
 * Created by Odoroki on 2015-09-26.
 */

var sceneManager = {
    intervalID: null,
    nowScene: null,
    init: function (scene) {
        this.nowScene = scene;
        this.intervalID = setInterval(sceneManager.gameLoop, 1000/define.FPS);
    },
    setScene: function (scene) {
        this.nowScene = scene;
    }
};

sceneManager.gameLoop = function () {
    keyTool.update();
    zCamera.update();

    sceneManager.nowScene.update();
    drawTool.context.clearRect(0, 0, drawTool.canvas.width, drawTool.canvas.height);
    sceneManager.nowScene.draw();
};