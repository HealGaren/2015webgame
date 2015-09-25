/**
 * Created by Odoroki on 2015-09-25.
 */

var drawTool = {
    canvas: null,
    context: null,
    init: function(){
        this.canvas = document.getElementById("GameCanvas");
        this.context = this.canvas.getContext("2d");
    }
};