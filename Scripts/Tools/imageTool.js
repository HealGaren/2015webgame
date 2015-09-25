/**
 * Created by Odoroki on 2015-09-25.
 */

var imageTool = {
    images: {
        background: new Image(),
        player: new Image(),
        enemy: new Image()
    },
    init: function(){
        this.images.background.src = "Resources/background.png";
        this.images.player.src = "Resources/player.png";
        this.images.enemy.src = "Resources/enemy.png";
    }
};