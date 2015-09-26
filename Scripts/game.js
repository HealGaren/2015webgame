window.addEventListener("load", onLoad, false);



function onLoad(){
	console.log('load done!');
	drawTool.init();
	imageTool.init();
	keyTool.init();
	sceneManager.init(new ReadyScene());
}