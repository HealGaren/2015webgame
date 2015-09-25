/**
 * Created by Odoroki on 2015-09-25.
 */

var keyTool = {
    states:{
        KEY_NONE: 0,
        KEY_DOWN: 1,
        KEY_ON: 2,
        KEY_UP: 3
    },
    keyState:[],
    downBuffer:[],
    upBuffer:[],
    init: function(){
        for(var i=0; i<256; i++) {
            this.keyState[i] = 0;
            this.downBuffer[i] = this.upBuffer[i] = false;
        }
        window.addEventListener('keydown', this.onKeyDown, false);
        window.addEventListener('keyup', this.onKeyUp, false);
    },
    onKeyDown: function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (keyTool.keyState[e.keyCode] === keyTool.states.KEY_NONE) keyTool.downBuffer[e.keyCode] = true;
    },
    onKeyUp: function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (keyTool.keyState[e.keyCode] === keyTool.states.KEY_ON) keyTool.upBuffer[e.keyCode] = true;
    },
    update: function(){
        for(var i=0; i<256; i++){
            if(keyTool.downBuffer[i]) {
                keyTool.keyState[i] = keyTool.states.KEY_DOWN;
                keyTool.downBuffer[i] = false;
            }
            else if(keyTool.upBuffer[i]) {
                keyTool.keyState[i] = keyTool.states.KEY_UP;
                keyTool.upBuffer[i] = false;
            }
            else if(keyTool.keyState[i] === keyTool.states.KEY_DOWN){
                keyTool.keyState[i] = keyTool.states.KEY_ON;
            }
            else if(keyTool.keyState[i] === keyTool.states.KEY_UP){
                keyTool.keyState[i] = keyTool.states.KEY_NONE;
            }
        }
    }
};